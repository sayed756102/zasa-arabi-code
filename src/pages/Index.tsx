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
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              ZAS-برمجة
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            منصة البرمجة العربية الأولى - تعلم، اكتب، وطور بلغتك الأم
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 ZAS-برمجة. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;