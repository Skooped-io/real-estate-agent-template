import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PropertyCard from "@/components/PropertyCard";

import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";
import listing4 from "@/assets/listing-4.jpg";

const allListings = [
  { image: listing1, price: "$1,275,000", address: "2847 Barton Hills Dr, Austin, TX", beds: 4, baths: 3, sqft: "3,240", status: "Active" as const },
  { image: listing2, price: "$895,000", address: "1506 Westover Rd, Austin, TX", beds: 3, baths: 2, sqft: "2,180", status: "Active" as const },
  { image: listing3, price: "$485,000", address: "714 E 32nd St, Austin, TX", beds: 3, baths: 2, sqft: "1,650", status: "Pending" as const },
  { image: listing4, price: "$725,000", address: "3201 S Lamar Blvd #204, Austin, TX", beds: 2, baths: 2, sqft: "1,890", status: "Active" as const },
  { image: listing2, price: "$1,450,000", address: "9012 Balcones Dr, Austin, TX", beds: 5, baths: 4, sqft: "4,100", status: "Active" as const },
  { image: listing1, price: "$620,000", address: "405 E Riverside Dr #312, Austin, TX", beds: 2, baths: 2, sqft: "1,420", status: "Sold" as const },
];

const filters = ["All", "Active", "Pending", "Sold"];

const Listings = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? allListings : allListings.filter((l) => l.status === activeFilter);

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
                <PropertyCard {...listing} />
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
