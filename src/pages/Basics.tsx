import Header from "@/components/Header";
import BasicsSection from "@/components/BasicsSection";
import TermsSection from "@/components/TermsSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Basics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section for Basics */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="gradient-hero bg-clip-text text-transparent">
                  أساسيات البرمجة
                </span>
                <br />
                <span className="text-foreground">بالعربية</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                تعلم المفاهيم الأساسية للبرمجة بالجافاسكريبت والبايثون باللغة العربية
              </p>
            </div>
          </div>
        </section>
        
        {/* Basics Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Tabs defaultValue="basics" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="basics" className="text-lg font-semibold">
                  أساسيات البرمجة
                </TabsTrigger>
                <TabsTrigger value="terms" className="text-lg font-semibold">
                  قاموس المصطلحات
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="basics" className="space-y-8">
                <BasicsSection />
              </TabsContent>
              
              <TabsContent value="terms" className="space-y-8">
                <TermsSection />
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

export default Basics;