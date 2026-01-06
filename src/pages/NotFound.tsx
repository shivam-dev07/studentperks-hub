import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Header, Footer } from "@/components/Layout";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-8xl mb-4">🎓</div>
          <h1 className="font-heading text-4xl font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like this page has graduated. Let's get you back to discovering student offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="/">
                <Home className="h-4 w-4" />
                Go Home
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/results">
                <Search className="h-4 w-4" />
                Browse All Offers
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
