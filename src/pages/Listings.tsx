import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PropertyCard from "@/components/PropertyCard";
import { siteConfig, getImage } from "@/lib/config";

import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";
import listing4 from "@/assets/listing-4.jpg";

const listingImages = [listing1, listing2, listing3, listing4];
const filters = ["All", "Active", "Pending", "Sold"];

const Listings = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    document.title = siteConfig.seo.listings.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", siteConfig.seo.listings.description);
  }, []);

  const filtered = activeFilter === "All"
    ? siteConfig.listings
    : siteConfig.listings.filter((l) => l.status === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-2">Browse Properties</p>
            <h1 className="text-4xl md:text-5xl text-foreground mb-8">Current Listings</h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex gap-2 mb-10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                    activeFilter === f
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((listing, i) => (
              <ScrollReveal key={i} delay={i * 80}>
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

      <Footer />
    </div>
  );
};

export default Listings;
