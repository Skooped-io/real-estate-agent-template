import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

const Footer = () => (
  <footer className="bg-navy-deep text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-xl mb-4">{siteConfig.businessName.split(" ")[0]} <span className="text-gold">{siteConfig.businessName.split(" ").slice(1).join(" ")}</span></h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Your trusted partner for buying, selling, and investing in real estate. Serving the {siteConfig.serviceArea} for over {siteConfig.stats.yearsExperience} years.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Quick Links</h4>
          <div className="space-y-2.5">
            {[{ label: "View Listings", to: "/listings" }, { label: "Buyer Resources", to: "/buyers" }, { label: "Sell Your Home", to: "/sellers" }, { label: "About", to: "/about" }, { label: "Contact", to: "/contact" }].map((link) => (
              <Link key={link.to} to={link.to} className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/60">
            <a href={`tel:${siteConfig.phoneFull}`} className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4 text-gold" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4 text-gold" /> {siteConfig.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold mt-0.5" /> {siteConfig.address.street}<br />{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Office Hours</h4>
          <div className="space-y-1.5 text-sm text-primary-foreground/60">
            <p>{siteConfig.officeHours.weekday}</p>
            <p>{siteConfig.officeHours.saturday}</p>
            <p>{siteConfig.officeHours.sunday}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-primary-foreground/40">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Equal Housing Opportunity</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
