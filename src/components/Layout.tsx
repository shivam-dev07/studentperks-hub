import { GraduationCap, Heart, Shield } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="gradient-bg p-2 rounded-lg">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-lg">StudentOffers</span>
        </div>
        
        <nav className="flex items-center gap-6 text-sm">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="gradient-bg p-2 rounded-lg">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-lg">StudentOffers</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Helping students discover free and discounted software, tools, and learning platforms.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              Trust & Transparency
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✓ We never store your email</li>
              <li>✓ Only verified offers from official sources</li>
              <li>✓ No affiliate tracking or hidden ads</li>
              <li>✓ Open about eligibility requirements</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Disclaimer</h4>
            <p className="text-sm text-muted-foreground">
              Offers are subject to provider terms and conditions. Eligibility may vary based on your institution 
              and region. We do not guarantee availability of any offer. Always verify directly with providers.
            </p>
          </div>
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StudentOffers. Made with <Heart className="h-3 w-3 inline text-destructive" /> for students.
          </p>
          <p className="text-xs text-muted-foreground">
            India-first, globally accessible
          </p>
        </div>
      </div>
    </footer>
  );
}
