import { offers, categoryLabels, OfferCategory } from "@/data/offers";
import { Badge } from "@/components/ui/badge";

const categoryStats = Object.keys(categoryLabels).map((cat) => ({
  category: cat as OfferCategory,
  count: offers.filter((o) => o.category === cat).length,
}));

export function StatsBar() {
  return (
    <div className="py-8 border-y bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold gradient-text">{offers.length}+</div>
            <div className="text-sm text-muted-foreground">Verified Offers</div>
          </div>
          
          <div className="h-12 w-px bg-border hidden md:block" />
          
          <div className="flex flex-wrap justify-center gap-2">
            {categoryStats.map(({ category, count }) => (
              <Badge key={category} variant="secondary" className="gap-1">
                {categoryLabels[category]}
                <span className="font-bold">{count}</span>
              </Badge>
            ))}
          </div>
          
          <div className="h-12 w-px bg-border hidden md:block" />
          
          <div className="text-center">
            <div className="text-3xl font-heading font-bold gradient-text">$200k+</div>
            <div className="text-sm text-muted-foreground">Total Value</div>
          </div>
        </div>
      </div>
    </div>
  );
}
