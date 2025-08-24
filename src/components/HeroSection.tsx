import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Rocket, BookOpen, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToEditor = () => {
    const editorSection = document.querySelector('[data-editor-section]');
    if (editorSection) {
      editorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Title */}
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/cd8bbdaa-af6a-4443-985d-a371b8037231.png" 
                alt="ZAS Logo" 
                className="h-24 w-24 object-contain animate-pulse drop-shadow-lg"
              />
            </div>
            
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Zap className="h-4 w-4 ml-2" />
              البرمجة بالعربية الآن ممكنة
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="gradient-hero bg-clip-text text-transparent">
                برمج بلغتك
              </span>
              <br />
              <span className="text-foreground">الأم</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              تعلم الجافاسكريبت والبايثون باللغة العربية - من الكلمات الأساسية إلى البرامج المتقدمة
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 glow-primary" onClick={scrollToEditor}>
              <Code className="ml-2 h-5 w-5" />
              ابدأ البرمجة الآن
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link to="/basics">
                <BookOpen className="ml-2 h-5 w-5" />
                تعلم الأساسيات
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="space-y-3 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <Code className="h-8 w-8 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">محرر أكواد ذكي</h3>
              <p className="text-muted-foreground">
                اكتب الكود بالعربية واحصل على الترجمة الفورية
              </p>
            </div>
            
            <div className="space-y-3 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <BookOpen className="h-8 w-8 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">دروس تفاعلية</h3>
              <p className="text-muted-foreground">
                تعلم البرمجة خطوة بخطوة مع أمثلة عملية
              </p>
            </div>
            
            <div className="space-y-3 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <Rocket className="h-8 w-8 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">مشاريع حقيقية</h3>
              <p className="text-muted-foreground">
                طبق ما تعلمته في مشاريع واقعية ومفيدة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;