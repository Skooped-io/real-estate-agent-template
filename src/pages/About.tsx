import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Users, BookOpen } from "lucide-react";
import agentPhoto from "@/assets/agent-photo.jpg";

const About = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="pt-32 pb-24 section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <ScrollReveal animation="slide-right">
          <img src={agentPhoto} alt="Sarah Whitfield" className="rounded-lg shadow-2xl w-full max-w-lg sticky top-24" />
        </ScrollReveal>
        <ScrollReveal animation="slide-left">
          <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-2">About Me</p>
          <h1 className="text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">Sarah Whitfield</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            For over 15 years, I&apos;ve helped families across Austin find not just houses, but homes — places where memories are made and futures are built.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My approach is simple: listen first, act decisively, and always put my clients&apos; interests ahead of everything else. Real estate is one of the biggest decisions you&apos;ll ever make, and I believe you deserve an agent who treats it that way.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            When I&apos;m not negotiating deals or previewing properties, you&apos;ll find me exploring Austin&apos;s food scene with my family, volunteering with Habitat for Humanity, or hiking the Barton Creek Greenbelt with our golden retriever, Biscuit.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: Award, text: "Top 1% Austin Realtors" },
              { icon: Users, text: "500+ Families Served" },
              { icon: Heart, text: "Habitat for Humanity Volunteer" },
              { icon: BookOpen, text: "Certified Luxury Specialist" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          <Link to="/contact">
            <Button variant="gold" size="lg">Let&apos;s Work Together</Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
