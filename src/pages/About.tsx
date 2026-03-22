import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Users, BookOpen } from "lucide-react";
import { siteConfig, getImage } from "@/lib/config";
import { useEffect } from "react";
import agentPhoto from "@/assets/agent-photo.jpg";

const credentialIcons = [Award, Users, Heart, BookOpen];

const About = () => {
  useEffect(() => {
    document.title = siteConfig.seo.about.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", siteConfig.seo.about.description);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal animation="slide-right">
            <img src={getImage(null, 'about', agentPhoto)} alt={siteConfig.agentName} className="rounded-lg shadow-2xl w-full max-w-lg sticky top-24" />
          </ScrollReveal>
          <ScrollReveal animation="slide-left">
            <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-2">About Me</p>
            <h1 className="text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">{siteConfig.agentName}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {siteConfig.about.intro}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {siteConfig.about.approach}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {siteConfig.about.personal}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {siteConfig.about.credentials.map((text, i) => {
                const Icon = credentialIcons[i % credentialIcons.length];
                return (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                    <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm text-foreground">{text}</span>
                  </div>
                );
              })}
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
};

export default About;
