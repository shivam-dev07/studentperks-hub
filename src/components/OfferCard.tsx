import { Offer, OfferCategory } from "@/data/offers";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, AlertCircle, Clock, CreditCard, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface OfferCardProps {
  offer: Offer;
  eligibilityStatus: "eligible" | "maybe" | "check";
}

const categoryBadgeVariant: Record<OfferCategory, "cloud" | "learning" | "travel" | "government" | "research" | "hardware" | "career" | "developer" | "design" | "productivity"> = {
  cloud: "cloud",
  learning: "learning",
  travel: "travel",
  government: "government",
  research: "research",
  hardware: "hardware",
  career: "career",
  developer: "developer",
  design: "design",
  productivity: "productivity",
};

export function OfferCard({ offer, eligibilityStatus }: OfferCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusConfig = {
    eligible: {
      icon: CheckCircle,
      text: "Eligible",
      variant: "eligible" as const,
      color: "text-eligible",
    },
    maybe: {
      icon: AlertCircle,
      text: "Possibly Eligible",
      variant: "maybe" as const,
      color: "text-maybe",
    },
    check: {
      icon: AlertCircle,
      text: "Check Requirements",
      variant: "secondary" as const,
      color: "text-muted-foreground",
    },
  };

  const status = statusConfig[eligibilityStatus];
  const StatusIcon = status.icon;

  return (
    <Card className="hover:shadow-elevated hover:-translate-y-1 group overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{offer.logo}</span>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {offer.provider}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{offer.title}</p>
            </div>
          </div>
          <Badge variant={categoryBadgeVariant[offer.category]}>
            {offer.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="gradient-bg rounded-lg p-3">
          <p className="text-sm font-medium text-primary-foreground">{offer.benefit}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant={status.variant} className="gap-1">
            <StatusIcon className="h-3 w-3" />
            {status.text}
          </Badge>
          {!offer.requiresCreditCard && (
            <Badge variant="free" className="gap-1">
              <CreditCard className="h-3 w-3" />
              No Card Required
            </Badge>
          )}
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            {offer.validityPeriod}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">{offer.description}</p>

        {isExpanded && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <h4 className="text-sm font-semibold mb-2">Eligibility Requirements</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {offer.eligibility.map((req, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">How to Claim</h4>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                {offer.claimSteps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Verification</h4>
              <p className="text-sm text-muted-foreground">{offer.verificationMethod}</p>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-2 pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-1"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Less Details
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              View Details
            </>
          )}
        </Button>
        <Button variant="default" size="sm" asChild className="flex-1">
          <a href={offer.sourceUrl} target="_blank" rel="noopener noreferrer">
            Claim Offer
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
