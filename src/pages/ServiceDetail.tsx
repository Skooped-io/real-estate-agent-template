import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Phone, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, slugify } from "@/lib/config";

const serviceContent: Record<string, { paragraphs: string[]; includes: string[] }> = {
  buying: {
    paragraphs: [
      `Whether you're a first-time homebuyer or a seasoned investor, finding the right property in ${siteConfig.serviceArea} requires an agent who knows every neighborhood, school district, and market trend. ${siteConfig.agentName} brings ${siteConfig.stats.yearsExperience} years of local expertise to guide you through every step.`,
      `From initial consultations and mortgage pre-approval coordination to property tours and closing-day support, you'll have a dedicated partner who prioritizes your goals. We analyze comparable sales, negotiate aggressively on your behalf, and ensure no detail is overlooked.`,
      `Our buyer clients benefit from off-market opportunities and early access to new listings — giving you a competitive edge in today's fast-moving market.`,
    ],
    includes: [
      "Personalized property search based on your criteria",
      "Mortgage pre-approval coordination with trusted lenders",
      "Curated property tours with honest assessments",
      "Comparative market analysis for every property of interest",
      "Offer strategy and negotiation",
      "Inspection and appraisal coordination",
      "Closing logistics and move-in support",
    ],
  },
  selling: {
    paragraphs: [
      `Selling a home in ${siteConfig.serviceArea} is about more than listing it on the MLS. ${siteConfig.agentName} combines data-driven pricing, professional staging, and targeted marketing to ensure your property attracts the right buyers and sells for top dollar.`,
      `With an average of just ${siteConfig.stats.avgDaysOnMarket} days on market for our listings, our proven approach minimizes your time and maximizes your return. From pre-listing preparation to the closing table, every detail is managed with precision.`,
      `We invest in professional photography, drone aerials, 3D virtual tours, and multi-channel advertising so your home stands out in a crowded market.`,
    ],
    includes: [
      "Free comprehensive market analysis and pricing strategy",
      "Professional staging consultation",
      "HDR photography, drone aerials, and 3D virtual tours",
      "MLS listing and syndication to 500+ websites",
      "Targeted digital and print marketing campaigns",
      "Open house coordination",
      "Offer review, negotiation, and closing management",
    ],
  },
  investment: {
    paragraphs: [
      `${siteConfig.serviceArea} continues to be one of the most attractive real estate investment markets in the country. Whether you're looking for rental income properties, fix-and-flip opportunities, or long-term appreciation plays, ${siteConfig.agentName} provides the data-driven analysis you need.`,
      `We evaluate cap rates, cash-on-cash returns, neighborhood growth trajectories, and rental market dynamics to help you make informed investment decisions that align with your financial goals.`,
      `Our investor clients gain access to off-market deals, pre-foreclosure opportunities, and a network of trusted contractors, property managers, and lenders who specialize in investment properties.`,
    ],
    includes: [
      "Investment property identification and sourcing",
      "Cap rate and cash flow analysis",
      "Neighborhood growth and appreciation forecasting",
      "Rental market comparisons",
      "Contractor and property manager referrals",
      "1031 exchange coordination",
      "Portfolio strategy and diversification planning",
    ],
  },
  "property-management": {
    paragraphs: [
      `Owning investment property in ${siteConfig.serviceArea} should generate returns — not headaches. Our full-service property management handles every aspect of tenant relations and asset maintenance so you can enjoy passive income with peace of mind.`,
      `From tenant screening and lease administration to maintenance coordination and financial reporting, ${siteConfig.agentName} ensures your property is professionally managed and well-maintained.`,
      `We leverage local market knowledge to optimize rental pricing, minimize vacancies, and protect your investment for the long term.`,
    ],
    includes: [
      "Tenant screening and background checks",
      "Lease preparation and administration",
      "Rent collection and financial reporting",
      "Maintenance coordination and vendor management",
      "Regular property inspections",
      "Vacancy marketing and tenant placement",
      "Eviction management when necessary",
    ],
  },
  relocation: {
    paragraphs: [
      `Moving to ${siteConfig.serviceArea}? Whether you're relocating for work, family, or lifestyle, ${siteConfig.agentName} makes the transition seamless. We understand that moving to a new city involves more than finding a house — it's about finding the right community.`,
      `Our relocation services include neighborhood tours tailored to your lifestyle priorities, school district information, commute analysis, and connections to local resources that help you feel at home from day one.`,
      `We coordinate with your employer's relocation program when applicable, and our virtual tour capabilities allow you to explore properties remotely before you arrive.`,
    ],
    includes: [
      "Personalized neighborhood and community tours",
      "School district analysis and recommendations",
      "Commute and transportation planning",
      "Virtual property tours for remote buyers",
      "Corporate relocation program coordination",
      "Local resource and service provider referrals",
      "Temporary housing assistance",
    ],
  },
};

function getContentForService(slug: string) {
  if (serviceContent[slug]) return serviceContent[slug];
  return {
    paragraphs: [
      `${siteConfig.agentName} provides expert ${slug.replace(/-/g, " ")} services throughout ${siteConfig.serviceArea}. With ${siteConfig.stats.yearsExperience} years of experience, we deliver results that exceed expectations.`,
      `Our approach combines local market knowledge with personalized attention to ensure every client receives the highest level of service and support.`,
    ],
    includes: [
      "Initial consultation and needs assessment",
      "Customized strategy development",
      "Professional execution and management",
      "Regular updates and communication",
      "Post-service follow-up and support",
    ],
  };
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = siteConfig.services.find((s) => slugify(s.title) === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} in ${siteConfig.address.city}, ${siteConfig.address.state} | ${siteConfig.businessName}`;
      document.querySelector('meta[name="description"]')?.setAttribute(
        "content",
        `Professional ${service.title.toLowerCase()} services in ${siteConfig.serviceArea}. ${service.desc}. Contact ${siteConfig.agentName} at ${siteConfig.phone}.`
      );
    }
  }, [service]);

  if (!service || !slug) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-24 text-center section-padding">
          <h1 className="text-3xl text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/"><Button variant="gold">Back to Home</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const content = getContentForService(slug);
  const relatedServices = siteConfig.services.filter((s) => slugify(s.title) !== slug).slice(0, 4);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
      },
    },
    areaServed: siteConfig.serviceArea,
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-primary section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-primary-foreground/60 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-foreground/60">Services</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-foreground">{service.title}</span>
          </nav>
          <ScrollReveal>
            <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-3">{siteConfig.businessName}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.05]">{service.title}</h1>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">{service.desc}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <ScrollReveal>
              <div className="space-y-5">
                {content.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-[1.05rem]">{p}</p>
                ))}
              </div>
            </ScrollReveal>

            {/* What's Included */}
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl text-foreground mb-8">What's Included</h2>
              <ul className="space-y-4">
                {content.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal>
              <div className="bg-card border border-border rounded-lg p-8 md:p-10">
                <h3 className="text-2xl text-foreground mb-3">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact {siteConfig.agentName} for a free consultation about your {service.title.toLowerCase()} needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button variant="gold" size="lg">
                      Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <a href={`tel:${siteConfig.phoneFull}`}>
                    <Button variant="outline" size="lg">
                      <Phone className="w-4 h-4 mr-2" /> {siteConfig.phone}
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* NAP */}
            <ScrollReveal>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="font-serif text-lg text-foreground">{siteConfig.businessName}</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                    <a href={`tel:${siteConfig.phoneFull}`} className="hover:text-foreground transition-colors">{siteConfig.phone}</a>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                    <span>{siteConfig.address.full}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground/70 pt-2 border-t border-border">
                  Serving {siteConfig.serviceArea}
                </p>
              </div>
            </ScrollReveal>

            {/* Related Services */}
            <ScrollReveal delay={100}>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-serif text-lg text-foreground mb-4">Other Services</h3>
                <div className="space-y-3">
                  {relatedServices.map((s) => (
                    <Link
                      key={slugify(s.title)}
                      to={`/services/${slugify(s.title)}`}
                      className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
