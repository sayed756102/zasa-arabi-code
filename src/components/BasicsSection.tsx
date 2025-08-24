import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, BookOpen, Lightbulb } from "lucide-react";

const BasicsSection = () => {
  const jsBasics = [
    {
      title: "المتغيرات",
      arabic: "متغير اسم = 'أحمد'",
      english: "let name = 'Ahmed'",
      description: "لتخزين البيانات واستخدامها لاحقاً"
    },
    {
      title: "الدوال",
      arabic: "دالة حساب(أ، ب) { ارجع أ + ب }",
      english: "function calculate(a, b) { return a + b }",
      description: "لتنظيم الكود وإعادة استخدامه"
    },
    {
      title: "الشروط",
      arabic: "اذا (العمر >= 18) { اطبع('بالغ') }",
      english: "if (age >= 18) { console.log('Adult') }",
      description: "لاتخاذ القرارات في البرنامج"
    },
    {
      title: "الحلقات",
      arabic: "لكل (متغير ي = 0؛ ي < 10؛ ي++) { اطبع(ي) }",
      english: "for (let i = 0; i < 10; i++) { console.log(i) }",
      description: "لتكرار تنفيذ الكود"
    }
  ];

  const pythonBasics = [
    {
      title: "المتغيرات",
      arabic: "اسم = 'فاطمة'",
      english: "name = 'Fatima'",
      description: "لتخزين البيانات"
    },
    {
      title: "الدوال",
      arabic: "دالة مرحبا(اسم): ارجع 'أهلا ' + اسم",
      english: "def hello(name): return 'Hello ' + name",
      description: "لتنظيم الكود"
    },
    {
      title: "الشروط",
      arabic: "اذا العمر >= 18: اطبع('بالغ')",
      english: "if age >= 18: print('Adult')",
      description: "للتحكم في التدفق"
    },
    {
      title: "الحلقات",
      arabic: "لكل ي في المدى(10): اطبع(ي)",
      english: "for i in range(10): print(i)",
      description: "للتكرار"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
          أساسيات البرمجة بالعربية
        </h2>
        <p className="text-muted-foreground text-lg">
          تعلم البرمجة بلغتك الأم - من الأساسيات إلى الاحتراف
        </p>
      </div>

      {/* JavaScript Basics */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Code2 className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">أساسيات الجافاسكريبت</h3>
          <Badge variant="secondary">JavaScript</Badge>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {jsBasics.map((item, index) => (
            <Card key={index} className="p-6 gradient-card hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-lg">{item.title}</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-editor-bg p-3 rounded-lg">
                  <p className="text-primary font-mono text-sm">{item.arabic}</p>
                </div>
                <div className="bg-code-bg p-3 rounded-lg">
                  <p className="text-foreground font-mono text-sm" dir="ltr">{item.english}</p>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Python Basics */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">أساسيات البايثون</h3>
          <Badge variant="secondary">Python</Badge>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {pythonBasics.map((item, index) => (
            <Card key={index} className="p-6 gradient-card hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-lg">{item.title}</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-editor-bg p-3 rounded-lg">
                  <p className="text-primary font-mono text-sm">{item.arabic}</p>
                </div>
                <div className="bg-code-bg p-3 rounded-lg">
                  <p className="text-foreground font-mono text-sm" dir="ltr">{item.english}</p>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BasicsSection;