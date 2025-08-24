import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookText, Search, Code, Calculator } from "lucide-react";
import { useState } from "react";

const TermsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const programmingTerms = [
    // JavaScript Terms
    { arabic: "متغير", english: "variable", type: "javascript", category: "أساسي" },
    { arabic: "دالة", english: "function", type: "javascript", category: "أساسي" },
    { arabic: "مصفوفة", english: "array", type: "javascript", category: "بيانات" },
    { arabic: "كائن", english: "object", type: "javascript", category: "بيانات" },
    { arabic: "حلقة", english: "loop", type: "javascript", category: "تحكم" },
    { arabic: "شرط", english: "condition", type: "javascript", category: "تحكم" },
    { arabic: "استثناء", english: "exception", type: "javascript", category: "أخطاء" },
    { arabic: "فئة", english: "class", type: "javascript", category: "كائنات" },
    { arabic: "وراثة", english: "inheritance", type: "javascript", category: "كائنات" },
    { arabic: "وعد", english: "promise", type: "javascript", category: "غير متزامن" },
    
    // Python Terms
    { arabic: "قاموس", english: "dictionary", type: "python", category: "بيانات" },
    { arabic: "قائمة", english: "list", type: "python", category: "بيانات" },
    { arabic: "صف", english: "tuple", type: "python", category: "بيانات" },
    { arabic: "مجموعة", english: "set", type: "python", category: "بيانات" },
    { arabic: "مولد", english: "generator", type: "python", category: "متقدم" },
    { arabic: "مزخرف", english: "decorator", type: "python", category: "متقدم" },
    { arabic: "وحدة", english: "module", type: "python", category: "تنظيم" },
    { arabic: "حزمة", english: "package", type: "python", category: "تنظيم" },
    
    // Mathematical Terms
    { arabic: "جمع", english: "addition", type: "math", category: "عمليات" },
    { arabic: "طرح", english: "subtraction", type: "math", category: "عمليات" },
    { arabic: "ضرب", english: "multiplication", type: "math", category: "عمليات" },
    { arabic: "قسمة", english: "division", type: "math", category: "عمليات" },
    { arabic: "أس", english: "exponent", type: "math", category: "عمليات" },
    { arabic: "جذر", english: "square root", type: "math", category: "عمليات" },
    { arabic: "لوغاريتم", english: "logarithm", type: "math", category: "عمليات" },
    { arabic: "مصفوفة", english: "matrix", type: "math", category: "جبر" },
    { arabic: "متجه", english: "vector", type: "math", category: "جبر" },
    { arabic: "مشتقة", english: "derivative", type: "math", category: "تفاضل" },
    { arabic: "تكامل", english: "integral", type: "math", category: "تفاضل" },
    
    // Programming Concepts
    { arabic: "خوارزمية", english: "algorithm", type: "concept", category: "أساسي" },
    { arabic: "بنية البيانات", english: "data structure", type: "concept", category: "بيانات" },
    { arabic: "تعقد زمني", english: "time complexity", type: "concept", category: "أداء" },
    { arabic: "تعقد مكاني", english: "space complexity", type: "concept", category: "أداء" },
    { arabic: "ترتيب", english: "sorting", type: "concept", category: "خوارزميات" },
    { arabic: "بحث", english: "search", type: "concept", category: "خوارزميات" },
    { arabic: "رسم بياني", english: "graph", type: "concept", category: "هياكل" },
    { arabic: "شجرة", english: "tree", type: "concept", category: "هياكل" },
    { arabic: "مكدس", english: "stack", type: "concept", category: "هياكل" },
    { arabic: "طابور", english: "queue", type: "concept", category: "هياكل" },
  ];

  const filteredTerms = programmingTerms.filter(term =>
    term.arabic.includes(searchTerm) || 
    term.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.category.includes(searchTerm)
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "javascript": return <Code className="h-4 w-4 text-yellow-500" />;
      case "python": return <Code className="h-4 w-4 text-blue-500" />;
      case "math": return <Calculator className="h-4 w-4 text-green-500" />;
      case "concept": return <BookText className="h-4 w-4 text-purple-500" />;
      default: return <BookText className="h-4 w-4" />;
    }
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      javascript: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      python: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      math: "bg-green-500/10 text-green-500 border-green-500/20",
      concept: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    };
    return colors[type as keyof typeof colors] || "bg-gray-500/10 text-gray-500";
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
          قاموس المصطلحات البرمجية
        </h2>
        <p className="text-muted-foreground text-lg mb-6">
          ترجمة شاملة لجميع المصطلحات في البرمجة والرياضيات
        </p>
        
        {/* Search */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="ابحث عن مصطلح..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-10"
          />
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTerms.map((term, index) => (
          <Card key={index} className="p-4 gradient-card hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {getTypeIcon(term.type)}
                <Badge className={`text-xs ${getTypeBadge(term.type)}`}>
                  {term.category}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-right">
                <h4 className="font-bold text-lg text-primary">{term.arabic}</h4>
              </div>
              
              <div className="bg-code-bg p-2 rounded text-left" dir="ltr">
                <p className="font-mono text-sm text-foreground">{term.english}</p>
              </div>
              
              <Badge variant="outline" className="text-xs">
                {term.type === "javascript" ? "جافاسكريبت" : 
                 term.type === "python" ? "بايثون" :
                 term.type === "math" ? "رياضيات" : "مفاهيم"}
              </Badge>
            </div>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <BookText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">لم يتم العثور على مصطلحات تطابق البحث</p>
        </div>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-yellow-500 mb-1">
            {programmingTerms.filter(t => t.type === "javascript").length}
          </div>
          <div className="text-sm text-muted-foreground">مصطلحات JS</div>
        </Card>
        
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-blue-500 mb-1">
            {programmingTerms.filter(t => t.type === "python").length}
          </div>
          <div className="text-sm text-muted-foreground">مصطلحات Python</div>
        </Card>
        
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-green-500 mb-1">
            {programmingTerms.filter(t => t.type === "math").length}
          </div>
          <div className="text-sm text-muted-foreground">مصطلحات رياضية</div>
        </Card>
        
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-purple-500 mb-1">
            {programmingTerms.filter(t => t.type === "concept").length}
          </div>
          <div className="text-sm text-muted-foreground">مفاهيم عامة</div>
        </Card>
      </div>
    </div>
  );
};

export default TermsSection;