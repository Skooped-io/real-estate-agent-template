import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, BarChart3, Megaphone, Handshake, CheckCircle } from "lucide-react";
import listing1 from "@/assets/listing-1.jpg";
import listing3 from "@/assets/listing-3.jpg";

const steps = [
  { num: "01", title: "Home Evaluation", desc: "Free comprehensive market analysis to determine optimal pricing." },
  { num: "02", title: "Preparation", desc: "Staging advice, repairs, and professional photography to showcase your home." },
  { num: "03", title: "Marketing Launch", desc: "Multi-channel campaign including MLS, social, print, and open houses." },
  { num: "04", title: "Offers & Negotiation", desc: "Expert review of every offer with strategic counter-negotiation." },
  { num: "05", title: "Closing", desc: "Smooth transaction management through inspection, appraisal, and close." },
];

const differentiators = [
  { icon: Camera, title: "Professional Photography", desc: "HDR photos, drone aerials, and 3D virtual tours for every listing." },
  { icon: BarChart3, title: "Data-Driven Pricing", desc: "Comp analysis using 15+ market factors, not just square footage." },
  { icon: Megaphone, title: "Targeted Marketing", desc: "Custom campaigns reaching qualified buyers across digital and print." },
  { icon: Handshake, title: "White-Glove Service", desc: "From staging to closing, I handle every detail so you don't have to." },
];

const recentSales = [
  { image: listing1, address: "2847 Barton Hills Dr", sold: "$1,310,000", days: "8 days" },
  { image: listing3, address: "714 E 32nd St", sold: "$502,000", days: "5 days" },
];

const Sellers = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 section-padding bg-navy-deep">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-3">For Sellers</p>
          <h1 className="text-4xl md:text-5xl text-primary-foreground leading-[1.1] mb-6">What&apos;s Your Home Worth?</h1>
          <p className="text-primary-foreground/60 text-lg mb-8">
            Get a free, no-obligation market analysis and discover how to maximize your home&apos;s value.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl">Get Free Home Valuation</Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>

    {/* 5 Steps */}
    <section className="py-24 section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl text-foreground text-center mb-16">The Selling Process</h2>
        </ScrollReveal>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="flex gap-6 items-start">
                <span className="font-serif text-3xl text-gold flex-shrink-0 w-12">{step.num}</span>
                <div className="border-b border-border pb-6 flex-1">
                  <h3 className="font-serif text-xl text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Differentiators */}
    <section className="py-24 bg-card section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl text-foreground text-center mb-16">What I Do Differently</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="flex gap-4 p-6 rounded-lg border border-border">
                <item.icon className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Recent Sales */}
    <section className="py-24 section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl text-foreground text-center mb-12">Recent Sales</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentSales.map((sale, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="rounded-lg overflow-hidden border border-border">
                <img src={sale.image} alt={sale.address} className="w-full aspect-[16/10] object-cover" />
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <p className="font-serif text-lg text-foreground">{sale.address}</p>
                    <p className="text-sm text-muted-foreground">Sold in {sale.days}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-market-green" />
                    <span className="font-serif text-lg text-foreground">{sale.sold}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Sellers;
