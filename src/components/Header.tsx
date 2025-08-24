import { Button } from "@/components/ui/button";
import { Code, BookOpen, Home } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              ZAS-برمجة
            </h1>
          </div>
        </div>
        
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="gap-2">
            <Home className="h-4 w-4" />
            الرئيسية
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <BookOpen className="h-4 w-4" />
            الأساسيات
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Code className="h-4 w-4" />
            المحرر
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;