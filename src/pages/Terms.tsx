import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/" className="gap-2">
                <ArrowRight className="h-4 w-4 rotate-180" />
                العودة للرئيسية
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
              شروط الاستخدام
            </h1>
            <p className="text-muted-foreground text-lg">
              شروط وأحكام استخدام منصة ZAS-برمجة العربية
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">قبول الشروط</h2>
              <p className="text-muted-foreground leading-relaxed">
                باستخدامك لموقع ZAS-برمجة، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
                إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.
              </p>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">الخدمات المقدمة</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>يوفر موقع ZAS-برمجة الخدمات التالية:</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>محرر أكواد عربي لترجمة البرمجة من العربية للإنجليزية</li>
                  <li>دروس تعليمية لأساسيات البرمجة بالعربية</li>
                  <li>قاموس مصطلحات البرمجة العربية</li>
                  <li>أنظمة ترجمة متعددة للأكواد</li>
                </ul>
              </div>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">الاستخدام المسموح</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>يحق لك استخدام الموقع للأغراض التالية:</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>التعلم والتطوير الشخصي</li>
                  <li>الأغراض التعليمية والأكاديمية</li>
                  <li>المشاريع التجارية والشخصية</li>
                  <li>مشاركة المحتوى مع ذكر المصدر</li>
                </ul>
              </div>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">الاستخدام المحظور</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>يُمنع استخدام الموقع للأغراض التالية:</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>أي أنشطة غير قانونية أو ضارة</li>
                  <li>نسخ أو تقليد الموقع تجارياً دون إذن</li>
                  <li>إرسال فيروسات أو برامج ضارة</li>
                  <li>التلاعب بأمان الموقع أو محاولة اختراقه</li>
                </ul>
              </div>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">الملكية الفكرية</h2>
              <p className="text-muted-foreground leading-relaxed">
                جميع المحتويات والتصاميم والأكواد الخاصة بموقع ZAS-برمجة محمية بحقوق الطبع والنشر. 
                المحتوى التعليمي مجاني للاستخدام الشخصي والتعليمي مع ذكر المصدر.
              </p>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">إخلاء المسؤولية</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>موقع ZAS-برمجة:</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>لا يضمن دقة الترجمات البرمجية بنسبة 100%</li>
                  <li>غير مسؤول عن أي أضرار ناتجة عن استخدام الكود المترجم</li>
                  <li>يُقدم الخدمة "كما هي" دون ضمانات</li>
                  <li>قد يتم تعديل أو إيقاف الخدمة دون إشعار مسبق</li>
                </ul>
              </div>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">التعديلات</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إشعارك بأي تغييرات مهمة عبر الموقع.
                الاستمرار في استخدام الموقع بعد التعديلات يعني موافقتك على الشروط الجديدة.
              </p>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">القانون المطبق</h2>
              <p className="text-muted-foreground leading-relaxed">
                تخضع هذه الشروط للقوانين المعمول بها، وأي نزاع ينشأ عن استخدام الموقع 
                سيتم حله بالطرق الودية أولاً.
              </p>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">التواصل</h2>
              <p className="text-muted-foreground leading-relaxed">
                للاستفسارات حول شروط الاستخدام، يمكنك التواصل معنا عبر صفحة 
                <Link to="/contact" className="text-primary hover:underline mx-1">
                  التواصل
                </Link>
                أو زيارة صفحتنا على فيسبوك.
              </p>
            </section>

            <div className="text-center text-sm text-muted-foreground mt-8 pt-6 border-t border-border">
              آخر تحديث: ديسمبر 2024 | © ZAS-برمجة - جميع الحقوق محفوظة
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;