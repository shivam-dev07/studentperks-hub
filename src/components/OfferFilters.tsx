import { OfferCategory, categoryLabels } from "@/data/offers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Search, Filter, X } from "lucide-react";

interface OfferFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategories: OfferCategory[];
  onCategoryToggle: (category: OfferCategory) => void;
  noCreditCardOnly: boolean;
  onNoCreditCardChange: (value: boolean) => void;
  onClearFilters: () => void;
}

const categories: OfferCategory[] = ["cloud", "ai", "developer", "design", "learning", "productivity"];

export function OfferFilters({
  searchQuery,
  onSearchChange,
  selectedCategories,
  onCategoryToggle,
  noCreditCardOnly,
  onNoCreditCardChange,
  onClearFilters,
}: OfferFiltersProps) {
  const hasActiveFilters = searchQuery || selectedCategories.length > 0 || noCreditCardOnly;

  return (
    <div className="glass-strong rounded-2xl p-6 space-y-6 sticky top-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="font-heading font-semibold">Filters</h3>
        </div>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            <X className="h-4 w-4" />
            Clear
          </Button>
        )}
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search offers..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-10"
        />
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Categories</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategories.includes(category) ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryToggle(category)}
              className="text-xs"
            >
              {categoryLabels[category]}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between py-2 px-1 rounded-lg bg-secondary/50">
        <Label htmlFor="no-card" className="text-sm cursor-pointer">
          No credit card required
        </Label>
        <Switch
          id="no-card"
          checked={noCreditCardOnly}
          onCheckedChange={onNoCreditCardChange}
        />
      </div>
    </div>
  );
}
