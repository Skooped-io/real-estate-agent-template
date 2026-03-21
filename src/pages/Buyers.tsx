import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, FileText, Key, Home, CheckSquare } from "lucide-react";

const buyingSteps = [
  { icon: FileText, title: "Get Pre-Approved", desc: "Connect with trusted lenders to understand your buying power and lock in the best rate." },
  { icon: Search, title: "Define Your Search", desc: "We'll build your wish list — location, size, features, and lifestyle priorities." },
  { icon: Home, title: "Tour & Compare", desc: "Curated showings based on your criteria, with honest assessments of each property." },
  { icon: CheckSquare, title: "Make an Offer", desc: "Strategic offer preparation with competitive analysis to win in today's market." },
  { icon: Key, title: "Close & Move In", desc: "I manage inspections, appraisals, and closing logistics — you just pack." },
];

const firstTimerTips = [
  "Start with pre-approval, not house hunting",
  "Budget for closing costs (2-5% of purchase price)",
  "Don't skip the home inspection",
  "Think about resale value, even for your first home",
  "Ask about property taxes, HOA fees, and insurance",
  "Consider the commute and neighborhood at different times of day",
];

const Buyers = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="pt-32 pb-20 section-padding bg-navy-deep">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-3">For Buyers</p>
          <h1 className="text-4xl md:text-5xl text-primary-foreground leading-[1.1] mb-6">Your Home Buying Journey</h1>
          <p className="text-primary-foreground/60 text-lg mb-8">
            From pre-approval to move-in day, I&apos;ll guide you through every step with clarity and confidence.
          </p>
          <Link to="/listings">
            <Button variant="gold" size="xl">Browse Listings</Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 section-padding">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl text-foreground text-center mb-16">The Process, Step by Step</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {buyingSteps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-base text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* First-Time Buyers */}
    <section className="py-24 bg-card section-padding">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl text-foreground text-center mb-4">First-Time Buyer?</h2>
          <p className="text-center text-muted-foreground mb-12">Here&apos;s what I wish every buyer knew before starting their search.</p>
        </ScrollReveal>
        <div className="space-y-4">
          {firstTimerTips.map((tip, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="flex items-start gap-3 p-4 rounded-lg border border-border">
                <CheckSquare className="w-5 h-5 text-market-green flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{tip}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="gold" size="lg">Schedule a Buyer Consultation</Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default Buyers;
