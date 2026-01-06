import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        eligible: "border-transparent bg-eligible text-eligible-foreground",
        maybe: "border-transparent bg-maybe text-maybe-foreground",
        category: "border-transparent bg-primary/10 text-primary font-semibold",
        cloud: "border-transparent bg-blue-100 text-blue-700",
        learning: "border-transparent bg-amber-100 text-amber-700",
        travel: "border-transparent bg-teal-100 text-teal-700",
        government: "border-transparent bg-indigo-100 text-indigo-700",
        research: "border-transparent bg-purple-100 text-purple-700",
        hardware: "border-transparent bg-orange-100 text-orange-700",
        career: "border-transparent bg-rose-100 text-rose-700",
        developer: "border-transparent bg-emerald-100 text-emerald-700",
        design: "border-transparent bg-pink-100 text-pink-700",
        productivity: "border-transparent bg-cyan-100 text-cyan-700",
        free: "border-transparent bg-emerald-100 text-emerald-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
