import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CodeEditor from "@/components/CodeEditor";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Index = () => {
  const [activeLanguage, setActiveLanguage] = useState<"javascript" | "python">("javascript");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Code Editor Section */}
        <section className="py-16 px-4 bg-muted/30" data-editor-section>
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
                محرر الأكواد العربي
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                اكتب الكود بالعربية واحصل على الترجمة الفورية
              </p>
              
              {/* Link to Basics */}
              <Button asChild variant="outline" size="lg" className="gap-2 mb-8">
                <Link to="/basics">
                  <BookOpen className="h-5 w-5" />
                  تعلم الأساسيات أولاً
                </Link>
              </Button>
            </div>
            
            <Tabs value={activeLanguage} onValueChange={(value) => setActiveLanguage(value as "javascript" | "python")} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="javascript" className="text-lg">
                  جافاسكريبت
                </TabsTrigger>
                <TabsTrigger value="python" className="text-lg">
                  بايثون
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="javascript" className="space-y-6">
                <CodeEditor language="javascript" />
              </TabsContent>
              
              <TabsContent value="python" className="space-y-6">
                <CodeEditor language="python" />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-right">
              <div className="text-2xl font-bold gradient-hero bg-clip-text text-transparent mb-4">
                ZAS-برمجة
              </div>
              <p className="text-muted-foreground">
                منصة البرمجة العربية الأولى - تعلم، اكتب، وطور بلغتك الأم
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="font-bold text-foreground mb-4">روابط سريعة</h3>
              <div className="space-y-2">
                <div>
                  <Link to="/basics" className="text-muted-foreground hover:text-primary transition-colors">
                    الأساسيات
                  </Link>
                </div>
                <div>
                  <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    سياسة الخصوصية
                  </Link>
                </div>
                <div>
                  <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    شروط الاستخدام
                  </Link>
                </div>
                <div>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    تواصل معنا
                  </Link>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-foreground mb-4">تابعنا</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <a 
                  href="https://www.facebook.com/zas.253289" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 ZAS-برمجة. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;