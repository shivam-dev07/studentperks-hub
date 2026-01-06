import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building2, GraduationCap, Calendar, ArrowRight, Sparkles } from "lucide-react";

interface DiscoveryFormProps {
  onSubmit: (data: FormData) => void;
  isLoading?: boolean;
}

export interface FormData {
  email: string;
  collegeName: string;
  fieldOfStudy: string;
  graduationYear: string;
}

export function DiscoveryForm({ onSubmit, isLoading }: DiscoveryFormProps) {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    collegeName: "",
    fieldOfStudy: "",
    graduationYear: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 8 }, (_, i) => currentYear + i);

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
      <div className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Your college email (e.g., student@iit.ac.in)"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="pl-12"
            required
          />
        </div>
        
        <div className="relative">
          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="College/University name"
            value={formData.collegeName}
            onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
            className="pl-12"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Field of study"
              value={formData.fieldOfStudy}
              onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
              className="pl-12"
            />
          </div>
          
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <select
              value={formData.graduationYear}
              onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
              className="flex h-12 w-full rounded-xl border border-input bg-card px-4 py-3 pl-12 text-base ring-offset-background transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:border-primary/50 shadow-soft appearance-none cursor-pointer"
            >
              <option value="">Graduation year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full group"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Sparkles className="animate-pulse" />
            Discovering offers...
          </>
        ) : (
          <>
            Discover My Offers
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        🔒 Your email is used only to detect eligibility. We don't store or share it.
      </p>
    </form>
  );
}
