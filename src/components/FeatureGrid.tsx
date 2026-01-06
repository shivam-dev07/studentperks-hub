import { CheckCircle, Zap, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Discovery",
    description: "Enter your college email and instantly see all offers you're eligible for.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your email is only used to detect your eligibility domain. We never store it.",
  },
  {
    icon: CheckCircle,
    title: "Verified Offers",
    description: "Every offer is verified and linked directly to official provider pages.",
  },
  {
    icon: Clock,
    title: "Always Updated",
    description: "Our database is regularly updated with the latest student offers.",
  },
];

export function FeatureGrid() {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stop searching through scattered blogs and outdated lists. We've compiled all verified student offers in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gradient-bg w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
