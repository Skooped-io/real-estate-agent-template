import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const interestOptions = ["Buying", "Selling", "Both", "Investment"];
const timelineOptions = ["ASAP", "1-3 Months", "3-6 Months", "Just Exploring"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "", priceRange: "", timeline: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Sarah will be in touch within 24 hours.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal animation="slide-right">
            <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-2">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">Let&apos;s Talk Real Estate</h1>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Whether you have a quick question or are ready to start your journey, I&apos;d love to hear from you. Fill out the form or reach out directly.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "(555) 123-4567", href: "tel:+15551234567" },
                { icon: Mail, label: "sarah@whitfieldrealty.com", href: "mailto:sarah@whitfieldrealty.com" },
                { icon: MapPin, label: "412 Congress Ave, Suite 200, Austin, TX 78701" },
                { icon: Clock, label: "Mon-Fri 9-6 · Sat 10-4 · Sun by appointment" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-foreground hover:text-gold transition-colors mt-2">{item.label}</a>
                  ) : (
                    <p className="text-foreground mt-2">{item.label}</p>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-left">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 shadow-lg space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">I&apos;m Interested In</label>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, interest: opt })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-[0.97] ${
                        form.interest === opt
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Timeline</label>
                <div className="flex flex-wrap gap-2">
                  {timelineOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, timeline: opt })}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all active:scale-[0.97] ${
                        form.timeline === opt
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full">Send Message</Button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
