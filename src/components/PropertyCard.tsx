import { Link } from "react-router-dom";
import { Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  status?: "Active" | "Pending" | "Sold";
}

const statusStyles = {
  Active: "bg-market-green text-accent-foreground",
  Pending: "bg-gold text-primary-foreground",
  Sold: "bg-primary text-primary-foreground",
};

const PropertyCard = ({ image, price, address, beds, baths, sqft, status = "Active" }: PropertyCardProps) => (
  <Link to="/listings" className="group block">
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border/50">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={address}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
      <div className="p-5">
        <p className="font-serif text-xl text-foreground mb-1">{price}</p>
        <p className="text-sm text-muted-foreground mb-3">{address}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-3">
          <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {beds}</span>
          <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {baths}</span>
          <span className="flex items-center gap-1"><Square className="w-4 h-4" /> {sqft}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default PropertyCard;
