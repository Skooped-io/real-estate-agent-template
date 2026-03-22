import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Home, TrendingUp, Users, Shield, Clock, MapPin } from "lucide-react";
import { siteConfig, getImage } from "@/lib/config";
import { useEffect } from "react";

import heroImage from "@/assets/hero-home.jpg";
import agentPhoto from "@/assets/agent-photo.jpg";
import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";
import listing4 from "@/assets/listing-4.jpg";
import neighborhood1 from "@/assets/neighborhood-1.jpg";
import neighborhood2 from "@/assets/neighborhood-2.jpg";
import neighborhood3 from "@/assets/neighborhood-3.jpg";

const listingImages = [listing1, listing2, listing3, listing4];
const neighborhoodImages = [neighborhood1, neighborhood2, neighborhood3];

const iconMap: Record<string, React.ElementType> = { Home, TrendingUp, Users, Shield, MapPin };

const Index = () => {
  useEffect(() => {
    document.title = siteConfig.seo.home.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", siteConfig.seo.home.description);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={getImage(null, 'hero', heroImage)} alt={`${siteConfig.businessName} - ${siteConfig.industry}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-gold font-sans font-medium text-sm uppercase tracking-[0.2em] mb-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {siteConfig.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
            {siteConfig.seo.home.h1}
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-8 font-sans animate-fade-up" style={{ animationDelay: "600ms" }}>
            {siteConfig.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "800ms" }}>
            <Link to="/listings"><Button variant="gold" size="xl">{siteConfig.hero.ctaPrimary}</Button></Link>
            <Link to="/sellers"><Button variant="hero-outline" size="xl">{siteConfig.hero.ctaSecondary}</Button></Link>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-2">Featured Properties</p>
                <h2 className="text-3xl md:text-4xl text-foreground">Handpicked Listings</h2>
              </div>
              <Link to="/listings" className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.listings.slice(0, 4).map((listing, i) => (
              <ScrollReveal key={i} delay={i * 100} animation="fade-up">
                <PropertyCard
                  image={getImage(null, `listing_${i + 1}`, listingImages[i % listingImages.length])}
                  price={listing.price}
                  address={listing.address}
                  beds={listing.beds}
                  baths={listing.baths}
                  sqft={listing.sqft}
                  status={listing.status as "Active" | "Pending" | "Sold"}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Introduction */}
      <section className="py-24 bg-card section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="slide-right">
            <div className="relative">
              <img src={getImage(null, 'agent', agentPhoto)} alt={siteConfig.agentName} className="rounded-lg shadow-2xl w-full max-w-md" />
              <div className="absolute -bottom-6 -right-6 bg-gold rounded-lg p-5 shadow-lg hidden md:block">
                <p className="font-serif text-2xl text-primary-foreground">{siteConfig.stats.yearsExperience}</p>
                <p className="text-sm text-primary-foreground/80">Years Experience</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-left">
            <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-2">Your Agent</p>
            <h2 className="text-3xl md:text-4xl text-foreground mb-6">Hi, I&apos;m {siteConfig.agentName}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {siteConfig.about.intro}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {siteConfig.about.approach}
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">
                About Me <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-navy-deep section-padding">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-primary-foreground text-center mb-16">The Numbers Speak</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: siteConfig.stats.avgDaysOnMarket, label: "Avg. Days on Market" },
              { value: siteConfig.stats.homesSoldThisYear, label: "Homes Sold This Year" },
              { value: siteConfig.stats.clientSatisfaction, label: "Client Satisfaction" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="text-center p-8 rounded-lg border border-primary-foreground/10">
                  <p className="font-serif text-5xl text-gold mb-2">{stat.value}</p>
                  <p className="text-primary-foreground/60 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-2">What I Offer</p>
              <h2 className="text-3xl md:text-4xl text-foreground">Full-Service {siteConfig.industry}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {siteConfig.services.map((service, i) => {
              const IconComponent = iconMap[service.icon] || Home;
              return (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="p-6 rounded-lg border border-border hover:border-gold/30 hover:shadow-md transition-all duration-300 text-center group">
                    <IconComponent className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-serif text-lg text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-card section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-snug mb-8">
              &ldquo;{siteConfig.testimonials[0].quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-foreground">{siteConfig.testimonials[0].name}</p>
              <p className="text-sm text-muted-foreground">{siteConfig.testimonials[0].location}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-24 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-2">Explore</p>
              <h2 className="text-3xl md:text-4xl text-foreground">{siteConfig.address.city} Neighborhoods</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.neighborhoods.map((hood, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <Link to="/listings" className="group block relative rounded-lg overflow-hidden aspect-[4/3]">
                  <img src={getImage(null, `neighborhood_${i + 1}`, neighborhoodImages[i % neighborhoodImages.length])} alt={hood.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-serif text-xl text-primary-foreground mb-1">{hood.name}</h3>
                    <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
                      {hood.desc} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-deep section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-primary-foreground mb-4">{siteConfig.ctaSection.headline}</h2>
            <p className="text-primary-foreground/60 mb-8 text-lg">
              {siteConfig.ctaSection.subheadline}
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl">{siteConfig.ctaSection.buttonText}</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": siteConfig.businessName,
            "telephone": siteConfig.phone,
            "email": siteConfig.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": siteConfig.address.street,
              "addressLocality": siteConfig.address.city,
              "addressRegion": siteConfig.address.state,
              "postalCode": siteConfig.address.zip,
            },
            "areaServed": siteConfig.serviceArea,
            "url": window.location.origin,
          }),
        }}
      />

      <Footer />
    </div>
  );
};

export default Index;
