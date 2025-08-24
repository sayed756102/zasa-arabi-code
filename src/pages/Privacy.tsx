import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
              سياسة الخصوصية
            </h1>
            <p className="text-muted-foreground text-lg">
              نحن في ZAS-برمجة نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">جمع المعلومات</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحن لا نجمع أي معلومات شخصية منك عند استخدام محرر الأكواد العربي. 
                جميع الأكواد التي تكتبها تبقى محلية في متصفحك ولا يتم إرسالها إلى خوادمنا.
              </p>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">استخدام البيانات</h2>
              <p className="text-muted-foreground leading-relaxed">
                المعلومات الوحيدة التي نجمعها هي إحصائيات الاستخدام المجهولة مثل عدد الزيارات 
                ونوع المتصفح لتحسين تجربة الاستخدام. هذه المعلومات لا تحتوي على أي بيانات شخصية.
              </p>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">ملفات الارتباط (Cookies)</h2>
              <p className="text-muted-foreground leading-relaxed">
                نستخدم ملفات الارتباط الأساسية فقط لتحسين تجربة الاستخدام وحفظ تفضيلاتك. 
                يمكنك إلغاء تفعيل ملفات الارتباط من إعدادات متصفحك.
              </p>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">أمان البيانات</h2>
              <p className="text-muted-foreground leading-relaxed">
                نلتزم بحماية أي معلومات قد نجمعها باستخدام أحدث تقنيات الأمان والتشفير. 
                موقعنا محمي بشهادة SSL لضمان أمان الاتصال.
              </p>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">حقوقك</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>لك الحق في:</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>معرفة أي معلومات نجمعها عنك</li>
                  <li>طلب تصحيح أو حذف معلوماتك</li>
                  <li>الاعتراض على معالجة بياناتك</li>
                  <li>نقل بياناتك لخدمة أخرى</li>
                </ul>
              </div>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">تحديث السياسة</h2>
              <p className="text-muted-foreground leading-relaxed">
                قد نقوم بتحديث هذه السياسة من وقت لآخر. سنعلمك بأي تغييرات مهمة عبر الموقع.
                آخر تحديث: ديسمبر 2024
              </p>
            </section>

            <section className="bg-card/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">تواصل معنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر صفحة 
                <Link to="/contact" className="text-primary hover:underline mx-1">
                  التواصل
                </Link>
                أو زيارة صفحتنا على فيسبوك.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;