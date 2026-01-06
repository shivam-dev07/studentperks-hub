import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header, Footer } from "@/components/Layout";
import { OfferCard } from "@/components/OfferCard";
import { OfferFilters } from "@/components/OfferFilters";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { offers, filterOffers, OfferCategory } from "@/data/offers";
import { ArrowLeft, CheckCircle, AlertCircle, Grid3X3, List, Sparkles } from "lucide-react";

interface LocationState {
  email: string;
  collegeName: string;
  fieldOfStudy: string;
  graduationYear: string;
  isEligible: boolean;
  domain: string;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<OfferCategory[]>([]);
  const [noCreditCardOnly, setNoCreditCardOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleCategoryToggle = (category: OfferCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setNoCreditCardOnly(false);
  };

  const filteredOffers = useMemo(() => {
    return filterOffers({
      categories: selectedCategories.length > 0 ? selectedCategories : undefined,
      noCreditCard: noCreditCardOnly,
      searchQuery: searchQuery || undefined,
    });
  }, [selectedCategories, noCreditCardOnly, searchQuery]);

  const getEligibilityStatus = (offer: typeof offers[0]): "eligible" | "maybe" | "check" => {
    if (!state?.isEligible) return "check";
    
    // Simple eligibility logic based on email domain
    const needsGitHubPack = offer.eligibility.some(e => 
      e.toLowerCase().includes("github student")
    );
    
    if (needsGitHubPack) return "maybe";
    
    const hasSimpleEmailEligibility = offer.eligibility.some(e =>
      e.includes(".edu") || e.includes(".ac.in") || e.includes("email")
    );
    
    return hasSimpleEmailEligibility ? "eligible" : "maybe";
  };

  const eligibleCount = filteredOffers.filter(o => getEligibilityStatus(o) === "eligible").length;
  const maybeCount = filteredOffers.filter(o => getEligibilityStatus(o) === "maybe").length;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Results Header */}
        <div className="bg-secondary/30 border-b py-8">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Search
            </Button>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                  {state?.isEligible ? (
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-primary" />
                      Your Eligible Offers
                    </span>
                  ) : (
                    "Browse All Student Offers"
                  )}
                </h1>
                {state && (
                  <p className="text-muted-foreground">
                    {state.collegeName && `${state.collegeName} • `}
                    Domain: <code className="bg-secondary px-2 py-0.5 rounded text-sm">{state.domain}</code>
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Badge variant="eligible" className="gap-1">
                    <CheckCircle className="h-3 w-3" />
                    {eligibleCount} Eligible
                  </Badge>
                  <Badge variant="maybe" className="gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {maybeCount} Possibly
                  </Badge>
                </div>
                
                <div className="flex border rounded-lg overflow-hidden">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    className="rounded-none"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    className="rounded-none"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-72 flex-shrink-0">
              <OfferFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategories={selectedCategories}
                onCategoryToggle={handleCategoryToggle}
                noCreditCardOnly={noCreditCardOnly}
                onNoCreditCardChange={setNoCreditCardOnly}
                onClearFilters={handleClearFilters}
              />
            </aside>

            {/* Offers Grid */}
            <div className="flex-1">
              {filteredOffers.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    No offers found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search query
                  </p>
                  <Button variant="outline" onClick={handleClearFilters}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-4 text-sm text-muted-foreground">
                    Showing {filteredOffers.length} of {offers.length} offers
                  </div>
                  <div className={
                    viewMode === "grid" 
                      ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-6" 
                      : "space-y-4"
                  }>
                    {filteredOffers.map((offer, index) => (
                      <div
                        key={offer.id}
                        className="animate-scale-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <OfferCard
                          offer={offer}
                          eligibilityStatus={getEligibilityStatus(offer)}
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
