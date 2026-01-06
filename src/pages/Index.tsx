import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Footer } from "@/components/Layout";
import { DiscoveryForm, FormData } from "@/components/DiscoveryForm";
import { FeatureGrid } from "@/components/FeatureGrid";
import { StatsBar } from "@/components/StatsBar";
import { isEligibleDomain } from "@/data/offers";
import { Sparkles, ArrowDown } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const { eligible, domain } = isEligibleDomain(data.email);
    
    if (!eligible) {
      toast({
        title: "Domain not recognized",
        description: `We couldn't verify ${domain} as an academic domain. You can still browse all offers.`,
        variant: "default",
      });
    }
    
    // Navigate to results with state
    navigate("/results", { 
      state: { 
        email: data.email,
        collegeName: data.collegeName,
        fieldOfStudy: data.fieldOfStudy,
        graduationYear: data.graduationYear,
        isEligible: eligible,
        domain,
      } 
    });
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Discover $200k+ in free student benefits
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              Unlock Free Tools
              <br />
              <span className="gradient-text">For Students</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up stagger-1">
              Stop missing out on free software, cloud credits, and learning platforms. 
              Enter your college email to discover everything you're eligible for — 
              <strong className="text-foreground"> no signup required.</strong>
            </p>

            <div className="flex justify-center animate-slide-up stagger-2">
              <DiscoveryForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>

            <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground animate-fade-in stagger-3">
              <ArrowDown className="h-4 w-4 animate-bounce" />
              <span className="text-sm">Scroll to see how it works</span>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />
      <FeatureGrid />
      <Footer />
    </div>
  );
};

export default Index;
