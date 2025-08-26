import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Instagram, Linkedin, Twitter, Facebook, MessageCircle } from "lucide-react";
import sudipProfile from "@/assets/sudip-profile.png";

const Hero = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/su__deep__01/", label: "Instagram", color: "hover:text-pink-400" },
    { icon: MessageCircle, href: "https://www.tiktok.com/@sudeepmahato_01", label: "TikTok", color: "hover:text-white" },
    { icon: Github, href: "https://github.com/sudipmahato827-sudo", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Twitter, href: "https://x.com/su_deep_01", label: "X (Twitter)", color: "hover:text-blue-400" },
    { icon: Facebook, href: "https://www.facebook.com/sudip.mahato.33001", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sudip-mahato-a39a83328/", label: "LinkedIn", color: "hover:text-blue-600" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-primary opacity-10 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <div className="mb-6">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-sm bg-card/50 backdrop-blur-sm border-primary/20">
                👋 Welcome to my portfolio
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-glow">
                  Sudip Mahato
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                A passionate{" "}
                <span className="text-accent font-medium">explorer</span> of web design, programming, 
                graphic design, and content creation. Building my way up from{" "}
                <span className="text-primary font-medium">Nepal</span> 🇳🇵
              </p>
            </div>

            <div className="mb-8">
              <p className="text-lg text-muted-foreground mb-4">Currently exploring:</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {["Web Design", "Python", "C Programming", "Game Dev", "Graphic Design", "AI Tools"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80 transition-all duration-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="text-lg"
              >
                View My Work
              </Button>
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-glow ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-secondary rounded-full blur-lg opacity-20 animate-pulse delay-500"></div>
                
                {/* Profile image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-elevated">
                  <img
                    src={sudipProfile}
                    alt="Sudip Mahato - Web Developer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-accent-glow animate-bounce">
                  <span className="text-accent-foreground font-bold">👨‍💻</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow animate-bounce delay-300">
                  <span className="text-primary-foreground font-bold">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="rounded-full"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;