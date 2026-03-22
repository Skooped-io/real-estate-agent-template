import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, BarChart3, Megaphone, Handshake, CheckCircle } from "lucide-react";
import { siteConfig, getImage } from "@/lib/config";
import { useEffect } from "react";
import listing1 from "@/assets/listing-1.jpg";
import listing3 from "@/assets/listing-3.jpg";

const diffIconMap: Record<string, React.ElementType> = { Camera, BarChart3, Megaphone, Handshake };
const saleImages = [listing1, listing3];

const Sellers = () => {
  useEffect(() => {
    document.title = siteConfig.seo.sellers.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", siteConfig.seo.sellers.description);
  }, []);

  return (
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
            {siteConfig.sellerProcess.map((step, i) => (
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
            {siteConfig.sellerDifferentiators.map((item, i) => {
              const Icon = diffIconMap[item.icon] || Camera;
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="flex gap-4 p-6 rounded-lg border border-border">
                    <Icon className="w-8 h-8 text-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
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
            {siteConfig.recentSales.map((sale, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="rounded-lg overflow-hidden border border-border">
                  <img src={getImage(null, `recent_sale_${i + 1}`, saleImages[i % saleImages.length])} alt={sale.address} className="w-full aspect-[16/10] object-cover" />
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
};

export default Sellers;
