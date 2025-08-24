import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Settings, Search, BookOpen, Code, Database, Globe } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

// مصطلحات برمجية شاملة
export const programmingTerms = {
  // أساسيات البرمجة
  "كود": "Code",
  "شفرة برمجية": "Source Code", 
  "طلب": "Request",
  "استعلام": "Query",
  "رأس": "Header",
  "ترويسة": "Header Element",
  "فرز": "Sort",
  "ترتيب": "Order",
  "رسم بياني": "Graph",
  "مخطط": "Chart",
  "خوارزمية": "Algorithm",
  "هيكل": "Structure",
  "بنية": "Architecture",
  "تجزئة": "Hash",
  
  // أنواع البيانات
  "مصفوفة": "Array",
  "قائمة": "List",
  "قاموس": "Dictionary",
  "كائن": "Object",
  "مجموعة": "Set",
  "صف": "Queue",
  "مكدس": "Stack",
  "مصفوفة ثنائية": "Matrix",
  "صفيف": "Vector",
  "زوج مرتب": "Tuple",
  "سلسلة": "String",
  "عدد صحيح": "Integer",
  "عدد عشري": "Float",
  "منطقي": "Boolean",
  "قيمة فارغة": "Null",
  "قيمة غير معرفة": "Undefined",
  "قيمة لا شيء": "None",
  
  // مفاهيم عامة
  "حلقة": "Loop",
  "شرط": "Condition",
  "دالة": "Function",
  "معامل": "Operator",
  "معامل جمع": "Addition Operator",
  "معامل طرح": "Subtraction Operator",
  "معامل ضرب": "Multiplication Operator",
  "معامل قسمة": "Division Operator",
  "معامل باقي القسمة": "Modulus Operator",
  "مقارنة": "Comparison",
  "متغير": "Variable",
  "ثابت": "Constant",
  "معامل منطقي": "Logical Operator",
  "برنامج": "Program",
  "وحدة": "Module",
  "مكتبة": "Library",
  "إطار عمل": "Framework",
  "واجهة برمجية": "API",
  "برمجة كائنية": "OOP",
  "صنف": "Class",
  "نسخة": "Instance",
  "خاصية": "Property",
  "طريقة": "Method",
  "بناء الجملة": "Syntax",
  "مترجم": "Compiler",
  "مفسر": "Interpreter",
  "تصحيح الأخطاء": "Debugging",
  "استدعاء": "Call",
  "وسيط": "Argument",
  "قيمة إرجاع": "Return Value",
  
  // قواعد البيانات
  "قاعدة بيانات": "Database",
  "جدول": "Table",
  "صف قاعدة بيانات": "Row",
  "عمود": "Column",
  "مفتاح أساسي": "Primary Key",
  "مفتاح خارجي": "Foreign Key",
  "إدراج": "Insert",
  "تحديث": "Update",
  "حذف": "Delete",
  "اختيار": "Select",
  "علاقة": "Relation",
  
  // تطوير الويب
  "مستعرض": "Browser",
  "خادم": "Server",
  "استجابة": "Response",
  "جلسة": "Session",
  "كوكي": "Cookie",
  "واجهة أمامية": "Frontend",
  "واجهة خلفية": "Backend",
  "بروتوكول": "Protocol",
  "نطاق": "Domain",
  "رابط": "URL",
  "مسار": "Path",
  "نص الجسم": "Body",
  "عميل": "Client",
  "خادم ويب": "Web Server",
  "نقطة نهاية": "Endpoint",
  "جلب البيانات": "Fetch",
  "غير متزامن": "Async",
  
  // كلمات مفتاحية JavaScript
  "عامل منطقي و": "AND Operator",
  "اسم مستعار": "Alias",
  "تأكيد شرط": "Assert",
  "إيقاف الحلقة": "Break",
  "تعريف صنف": "Class Definition",
  "تخطي الدورة": "Continue",
  "تعريف دالة": "Function Definition",
  "حذف متغير": "Delete Variable",
  "شرط بديل": "Elif",
  "شرط بديل نهائي": "Else",
  "التقاط خطأ": "Catch Exception",
  "دفع عنصر": "Push",
  "سحب عنصر": "Pop",
  "التحقق من النوع": "instanceof",
  "إنشاء كائن جديد": "New Object",
  "إرجاع قيمة": "Return",
  "استدعاء الأب": "Super Call",
  "الوصول لدوال الأب": "Super Access",
  "بناء شرطي متعدد": "Switch",
  "يشير للكائن الحالي": "This Reference",
  "إطلاق خطأ": "Throw",
  "قيمة منطقية صحيحة": "True",
  "محاولة تنفيذ كود": "Try Block",
  "معالج للأخطاء": "Error Handler",
  "تصدير دوال": "Export",
  "مشاركة وحدة": "Module Export",
  "وراثة من صنف": "Extends",
  "قيمة منطقية خاطئة": "False",
  "ينفذ دائماً": "Finally",
  "حلقة تكرار": "For Loop",
  "حلقة بعدد مرات": "For Iteration",
  "كائن دالة": "Function Object",
  "استيراد مكتبة": "Import",
  "استيراد جزء من وحدة": "Import Module",
  "التحقق من وجود خاصية": "In Property",
  "التكرار على خصائص": "In Iteration",
  "إزاحة": "Shift",
  "بحث": "Search",
  "تفتيش": "Find",
  "حالة داخل التفرع": "Case",
  "تعريف متغير ثابت": "Const",
  "نقطة توقف للتصحيح": "Debugger",
  "القيمة الافتراضية": "Default",
  "حذف خاصية من كائن": "Delete Property",
  "بداية حلقة": "Do Loop",
  "تنفيذ الكود قبل التحقق": "Do While",
  "تعداد": "Enum",
  "تصفية": "Filter",
  "فلترة البيانات": "Data Filter",
  "تخطيط": "Map",
  "تعيين البيانات": "Data Mapping",
  "اختزال": "Reduce",
  "تقليص البيانات": "Data Reduction",
  "حاول": "Try",
  "جرب العملية": "Try Operation",
  "امسك": "Catch",
  "التقط الخطأ": "Catch Error",
  "ارمِ": "Throw",
  "ألقِ الخطأ": "Throw Error",
  "خطأ": "Error",
  "خلل": "Bug",
  "استثناء": "Exception",
  "رسالة": "Message",
  "سجل": "Log",
  "تدوين": "Record",
  "تحذير": "Warning",
  "إنذار": "Alert",
  "أخيراً": "Finally",
  "تصحيح الأخطاء النهائي": "Final Debug",
  "قطع": "Slice",
  "اقتطاع": "Cut",
  "قص": "Splice",
  "دمج": "Merge",
  "مكدس البيانات": "Data Stack",
  "رصة": "Pile",
  "طابور": "Queue",
  "جسم": "Body",
  "محتوى": "Content",
  "حالة": "Status",
  "وضع": "State",
  "إعادة توجيه": "Redirect",
  "مهلة": "Timeout",
  "انتهاء الوقت": "Time Expiry",
  "رابط ويب": "Web URL",
  "عنوان ويب": "Web Address",
  "منفذ": "Port",
  "رد": "Reply",
  "مستخدم": "User",
  "واجهة برمجة تطبيقات": "API Interface",
  "وجهة": "Destination",
  "إحضار": "Retrieve",
  "تطبيق": "Application",
  "جلب المحتوى": "Content Fetch",
  "إرسال": "Send",
  "اختبار": "Test",
  "إطلاق": "Launch",
  "إصدار": "Version",
  "مستودع": "Repository",
  "تزامن": "Sync",
  "انتظار": "Await",
  "رد نداء": "Callback",
  "إغلاق": "Closure",
  "نطاق البرمجة": "Programming Scope",
  "سياق": "Context",
  "نموذج أولي": "Prototype",
  "وراثة": "Inheritance",
  "توريث": "Inherit",
  "تركيب": "Composition",
  "تكوين": "Configuration",
  "تعدد الأشكال": "Polymorphism",
  "فرع": "Branch",
  "تفرع": "Branching",
  "دمج الكود": "Code Merge",
  "إصدار البرنامج": "Software Version",
  "نسخ": "Copy",
  "تعديل": "Edit",
  "تنصيب": "Install",
  "إزالة": "Remove",
  "إخراج": "Output",
  "مكون": "Component",
  "حزمة": "Package",
  "بناء": "Build",
  "إنشاء": "Create",
  "نشر": "Deploy",
  "إيداع": "Commit",
  "حفظ التغييرات": "Save Changes",
  "أمر": "Command",
  "تعليم": "Instruction",
  "قواعد الكتابة": "Writing Rules",
  "معالجة الأخطاء": "Error Handling",
  "تشغيل": "Run",
  "تنفيذ": "Execute",
  "ترجمة": "Compile",
  "تحويل": "Convert",
  "طباعة": "Print",
  "عرض": "Display",
  "إظهار": "Show",
  "إدخال": "Input",
  "مدخل": "Entry",
  "إخراج البيانات": "Data Output",
  "مخرجات": "Outputs",
  "تكرار": "Repeat",
  "إذا": "If",
  "وإلا": "Else",
  "تبديل": "Switch",
  "اختيار الحالة": "Choice",
  "حالة البرنامج": "Program State",
  "من أجل": "For",
  "لكل": "Each",
  "طالما": "While",
  "أثناء": "During",
  "نص": "Text",
  "سلسلة نصية": "Text String",
  "رقم صحيح": "Integer",
  "كسر": "Fraction",
  "صحيح": "Correct",
  "خطأ منطقي": "Logic Error",
  "لائحة": "List",
  "مفتاح": "Key",
  "تحليل رقم صحيح": "parseInt",
  "إعلان": "Declaration",
  "تصريح": "Statement",
  "زر": "Button",
  "مفتاح التبديل": "Toggle Switch",
  "نقر": "Click",
  "ضغط": "Press",
  "إرسال النموذج": "Form Submit",
  "تقديم": "Present",
  "نموذج": "Form",
  "استمارة": "Form",
  "حقل إدخال": "Input Field",
  "وصلة": "Link",
  "عنوان": "Address",
  "مُدخل": "Parameter",
  "مُعامل": "Parameter",
  "إضافة": "Add",
  "جمع": "Sum",
  "ملف": "File",
  "مستند": "Document",
  "اتصال": "Connection",
  "ربط": "Connect",
  "إغلاق الملف": "Close File",
  "مجلد": "Folder",
  "دليل": "Directory",
  "طريق": "Path",
  "طرح": "Subtract",
  "ضرب": "Multiply",
  "قسمة": "Divide",
  "زيادة": "Increment",
  "رفع": "Increase",
  "نقصان": "Decrement",
  "خفض": "Decrease",
  "باقي القسمة": "Modulo",
  "حجة": "Argument",
  "قيمة": "Value",
  "يساوي": "Equals",
  "لا يساوي": "Not Equal",
  "أكبر من": "Greater Than",
  "أصغر من": "Less Than",
  "و": "And",
  "أو": "Or",
  "ليس": "Not",
  "صواب": "True",
  "غير صحيح": "False",
  "خاص": "Private",
  "شخصي": "Personal",
  "عام": "Public",
  "متاح للجميع": "Available to All",
  "ثابت": "Static",
  "ساكن": "Stationary",
  "هذا": "This",
  "هذه": "This",
  "جديد": "New",
  "يمتد من": "Extends From",
  "يرث": "Inherits",
  "يطبق": "Implements",
  "تحليل عدد عشري": "parseFloat",
  "محتوى": "Content",
  "وظيفة": "Function",
  "فئة": "Category",
  "غرض": "Purpose",
  "كائن": "Object",
  "مُنشئ": "Constructor",
  "إعادة": "Return",
  "تحديد": "Define",
  "فهرس": "Index",
  "مؤشر": "Pointer",
  "عنصر": "Element",
  "فارغ": "Empty",
  "لا شيء": "Nothing",
  "غير مُعرّف": "Undefined",
  "نوع": "Type",
  "تحويل النوع": "Type Conversion",
  "صب": "Cast",
  "معالجة": "Processing",
  
  // مصطلحات إضافية حديثة
  "تطبيق ويب": "Web App",
  "تطبيق جوال": "Mobile App", 
  "واجهة مستخدم": "UI",
  "تجربة مستخدم": "UX",
  "تصميم متجاوب": "Responsive Design",
  "حوسبة سحابية": "Cloud Computing",
  "ذكاء اصطناعي": "AI",
  "تعلم آلة": "ML",
  "بيانات ضخمة": "Big Data",
  "أمن سيبراني": "Cybersecurity",
  "شبكة": "Network",
  "خوادم": "Servers",
  "قواعد بيانات": "Databases",
  "تطوير البرمجيات": "Software Development",
  "هندسة البرمجيات": "Software Engineering",
  "تحليل البيانات": "Data Analysis",
  "علم البيانات": "Data Science",
  "إنترنت الأشياء": "IoT",
  "واقع افتراضي": "VR",
  "واقع معزز": "AR",
  "بلوك تشين": "Blockchain",
  "عملة رقمية": "Cryptocurrency",
  "نمط تصميم": "Design Pattern",
  "معمارية البرمجيات": "Software Architecture",
  "اختبار البرمجيات": "Software Testing",
  "ضمان الجودة": "QA",
  "تطوير مستمر": "CI/CD",
  "تحكم في الإصدارات": "Version Control",
  "جيت": "Git",
  "دوكر": "Docker",
  "كوبرنيتس": "Kubernetes",
  "مايكروسيرفيس": "Microservices",
  "ريست": "REST",
  "جرافكيو ال": "GraphQL",
  "مصفوفة جيسون": "JSON",
  "اكس ام ال": "XML",
  "بروتوكول الأمان": "HTTPS",
  "قاعدة بيانات لا علائقية": "NoSQL",
  "قاعدة بيانات علائقية": "SQL",
  "مونجو دي بي": "MongoDB",
  "بوستجريس": "PostgreSQL",
  "ماي اس كيو ال": "MySQL",
  "ريديس": "Redis",
  "ميموري كاش": "Cache",
  "لود بالانسر": "Load Balancer",
  "شبكة توصيل المحتوى": "CDN",
  "نظام أسماء النطاقات": "DNS",
  "شهادة أمان": "SSL",
  "المصادقة": "OAuth",
  "رمز الويب": "JWT",
  "بوابة واجهة برمجية": "API Gateway",
  "معالج الطلبات": "Request Handler",
  "ميدل وير": "Middleware",
  "روتر": "Router",
  "كنترولر": "Controller",
  "موديل": "Model",
  "فيو": "View",
  "نموذج عرض تحكم": "MVC"
};

interface TranslationSettingsProps {
  onTermSelect?: (arabicTerm: string, englishTerm: string) => void;
}

const TranslationSettings = ({ onTermSelect }: TranslationSettingsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredTerms = Object.entries(programmingTerms).filter(([arabic, english]) =>
    arabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    english.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategory = (term: string): { name: string, icon: any, color: string } => {
    const categories = {
      "قواعد البيانات": { 
        keywords: ["قاعدة بيانات", "جدول", "عمود", "صف", "استعلام", "مفتاح", "علاقة", "Database", "Table", "Column", "Row", "Query", "Key", "SQL", "NoSQL", "MongoDB", "PostgreSQL"],
        icon: Database,
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      },
      "تطوير الويب": {
        keywords: ["مستعرض", "خادم", "طلب", "استجابة", "API", "URL", "HTML", "CSS", "JavaScript", "React", "HTTP", "Server", "Client", "Frontend", "Backend"],
        icon: Globe,
        color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      },
      "البرمجة الأساسية": {
        keywords: ["دالة", "متغير", "حلقة", "شرط", "مصفوفة", "Function", "Variable", "Loop", "Condition", "Array", "Object", "Class", "Method"],
        icon: Code,
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
      }
    };

    for (const [catName, catData] of Object.entries(categories)) {
      if (catData.keywords.some(keyword => 
        term.includes(keyword) || programmingTerms[term as keyof typeof programmingTerms]?.includes(keyword)
      )) {
        return { name: catName, icon: catData.icon, color: catData.color };
      }
    }

    return { 
      name: "عام", 
      icon: BookOpen, 
      color: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400" 
    };
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Settings className="h-4 w-4" />
          إعدادات الترجمة
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            قاموس المصطلحات البرمجية
          </DialogTitle>
          <DialogDescription>
            تصفح واستخدم المصطلحات البرمجية المتاحة لترجمة الكود
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="ابحث عن مصطلح بالعربية أو الإنجليزية..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 text-sm text-muted-foreground">
            <Badge variant="secondary" className="gap-1">
              <Database className="h-3 w-3" />
              قواعد البيانات ({Object.entries(programmingTerms).filter(([term]) => getCategory(term).name === "قواعد البيانات").length})
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Globe className="h-3 w-3" />
              تطوير الويب ({Object.entries(programmingTerms).filter(([term]) => getCategory(term).name === "تطوير الويب").length})
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Code className="h-3 w-3" />
              البرمجة الأساسية ({Object.entries(programmingTerms).filter(([term]) => getCategory(term).name === "البرمجة الأساسية").length})
            </Badge>
          </div>
          
          <Separator />
          
          <ScrollArea className="h-[400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredTerms.length > 0 ? (
                filteredTerms.map(([arabic, english]) => {
                  const category = getCategory(arabic);
                  const CategoryIcon = category.icon;
                  
                  return (
                    <Card 
                      key={arabic} 
                      className="p-3 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => onTermSelect?.(arabic, english)}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-right mb-1 text-sm">
                            {arabic}
                          </div>
                          <div className="text-muted-foreground text-left text-xs font-mono">
                            {english}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <Badge className={`text-xs ${category.color}`}>
                            <CategoryIcon className="h-3 w-3 mr-1" />
                            {category.name}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-8 text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>لا توجد مصطلحات تطابق البحث</p>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <Separator />
          
          <div className="text-xs text-muted-foreground">
            إجمالي المصطلحات: {Object.keys(programmingTerms).length} مصطلح
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TranslationSettings;