import Header from "@/components/Header";
import { ArrowRight, Mail, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
الموضوع: ${formData.subject}

الرسالة:
${formData.message}
    `.trim();

    // Create mailto link
    const mailto = `mailto:anwersayed531@gmail.com?subject=${encodeURIComponent(formData.subject || 'رسالة من موقع ZAS-برمجة')}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailto;
    
    toast({
      title: "تم!",
      description: "سيتم فتح برنامج البريد الإلكتروني لإرسال رسالتك",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              تواصل معنا
            </h1>
            <p className="text-muted-foreground text-lg">
              نحن نحب سماع آرائكم واقتراحاتكم لتطوير منصة ZAS-برمجة
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-6 gradient-card">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold text-primary">أرسل رسالة</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="اكتب اسمك"
                    required
                    dir="rtl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">الموضوع</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="موضوع الرسالة"
                    required
                    dir="rtl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">الرسالة</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    required
                    dir="rtl"
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  إرسال الرسالة
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 gradient-card">
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold text-primary">معلومات التواصل</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    نحن متاحون للرد على استفساراتكم ومساعدتكم في استخدام منصة ZAS-برمجة.
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="font-semibold text-foreground mb-2">أوقات الرد:</p>
                    <p>نحن نسعى للرد على جميع الرسائل خلال 24-48 ساعة</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card">
                <h3 className="text-xl font-bold text-primary mb-4">الأسئلة الشائعة</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">كيف أستخدم المحرر؟</p>
                    <p>اكتب الكود بالعربية ثم اضغط "ترجم" لرؤية الكود بالإنجليزية</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ما الفرق بين أنظمة الترجمة؟</p>
                    <p>الكلية تترجم كل شيء، الجزئية تترجم الكلمات الأساسية فقط، والمختلطة تحافظ على التعليقات العربية</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">هل يمكنني اقتراح كلمات جديدة؟</p>
                    <p>بالطبع! أرسل لنا اقتراحاتك وسنقوم بإضافتها للقاموس</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card">
                <h3 className="text-xl font-bold text-primary mb-4">تابعنا</h3>
                <p className="text-muted-foreground mb-4">
                  تابع آخر التحديثات والنصائح البرمجية على صفحتنا
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href="https://www.facebook.com/zas.253289" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    زيارة صفحة الفيس بوك
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;