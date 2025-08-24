import { Button } from "@/components/ui/button";
import { BookOpen, Home, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/cd8bbdaa-af6a-4443-985d-a371b8037231.png" 
              alt="ZAS Logo" 
              className="h-8 w-8 object-contain"
            />
            <h1 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              ZAS-برمجة
            </h1>
          </Link>
        </div>
        
        <nav className="flex items-center gap-4">
          <Button 
            variant={location.pathname === "/" ? "default" : "ghost"} 
            size="sm" 
            className="gap-2"
            asChild
          >
            <Link to="/">
              <Home className="h-4 w-4" />
              الرئيسية
            </Link>
          </Button>
          <Button 
            variant={location.pathname === "/basics" ? "default" : "ghost"} 
            size="sm" 
            className="gap-2"
            asChild
          >
            <Link to="/basics">
              <BookOpen className="h-4 w-4" />
              الأساسيات
            </Link>
          </Button>
          <Button 
            variant={location.pathname === "/contact" ? "default" : "ghost"} 
            size="sm" 
            className="gap-2"
            asChild
          >
            <Link to="/contact">
              <MessageCircle className="h-4 w-4" />
              تواصل معنا
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;