import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <AlertCircle className="h-20 w-20 text-primary mx-auto" />
          <h1 className="text-6xl font-bold gradient-hero bg-clip-text text-transparent">404</h1>
          <h2 className="text-2xl font-semibold">الصفحة غير موجودة</h2>
          <p className="text-muted-foreground">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
          </p>
        </div>
        
        <Button asChild variant="hero" size="lg" className="gap-2">
          <a href="/">
            <Home className="h-5 w-5" />
            العودة للرئيسية
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
