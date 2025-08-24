import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Play, Copy, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeEditorProps {
  language: "javascript" | "python";
}

const CodeEditor = ({ language }: CodeEditorProps) => {
  const [arabicCode, setArabicCode] = useState("");
  const [translatedCode, setTranslatedCode] = useState("");
  const { toast } = useToast();

  // قاموس ترجمة الكلمات الأساسية
  const jsTranslations = {
    "اذا": "if",
    "والا_اذا": "else if", 
    "والا": "else",
    "دالة": "function",
    "ارجع": "return",
    "متغير": "let",
    "ثابت": "const",
    "لكل": "for",
    "بينما": "while",
    "اطبع": "console.log",
    "صحيح": "true",
    "خطأ": "false",
    "فارغ": "null",
    "غير_معرف": "undefined"
  };

  const pythonTranslations = {
    "اذا": "if",
    "والا_اذا": "elif",
    "والا": "else", 
    "دالة": "def",
    "ارجع": "return",
    "لكل": "for",
    "بينما": "while",
    "اطبع": "print",
    "صحيح": "True",
    "خطأ": "False",
    "فارغ": "None",
    "في": "in",
    "من": "from",
    "استورد": "import"
  };

  const translateCode = () => {
    let translated = arabicCode;
    const translations = language === "javascript" ? jsTranslations : pythonTranslations;
    
    Object.entries(translations).forEach(([arabic, english]) => {
      const regex = new RegExp(`\\b${arabic}\\b`, 'g');
      translated = translated.replace(regex, english);
    });
    
    setTranslatedCode(translated);
    toast({
      title: "تم ترجمة الكود بنجاح",
      description: "يمكنك الآن نسخ الكود المترجم",
    });
  };

  const copyCode = async () => {
    if (translatedCode) {
      await navigator.clipboard.writeText(translatedCode);
      toast({
        title: "تم النسخ",
        description: "تم نسخ الكود إلى الحافظة",
      });
    }
  };

  const clearCode = () => {
    setArabicCode("");
    setTranslatedCode("");
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* محرر الكود العربي */}
      <Card className="p-6 gradient-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-primary">
            اكتب الكود بالعربية ({language === "javascript" ? "جافاسكريبت" : "بايثون"})
          </h3>
          <div className="flex gap-2">
            <Button onClick={translateCode} size="sm" className="gap-2">
              <Play className="h-4 w-4" />
              ترجم
            </Button>
            <Button onClick={clearCode} variant="outline" size="sm" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              مسح
            </Button>
          </div>
        </div>
        
        <Textarea
          value={arabicCode}
          onChange={(e) => setArabicCode(e.target.value)}
          placeholder={`// اكتب الكود بالعربية هنا
// مثال:
دالة مرحبا() {
  اطبع("أهلا وسهلا")
}

اذا (صحيح) {
  مرحبا()
}`}
          className="min-h-[400px] code-editor resize-y font-mono text-sm arabic-text"
          dir="rtl"
        />
      </Card>

      {/* الكود المترجم */}
      <Card className="p-6 gradient-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-primary">
            الكود المترجم ({language === "javascript" ? "JavaScript" : "Python"})
          </h3>
          <Button 
            onClick={copyCode} 
            variant="outline" 
            size="sm" 
            className="gap-2"
            disabled={!translatedCode}
          >
            <Copy className="h-4 w-4" />
            نسخ
          </Button>
        </div>
        
        <div className="code-output min-h-[400px] p-4 overflow-auto">
          <pre className="text-sm">
            <code className="text-foreground">{translatedCode || "// سيظهر الكود المترجم هنا بعد الضغط على 'ترجم'"}</code>
          </pre>
        </div>
      </Card>
    </div>
  );
};

export default CodeEditor;