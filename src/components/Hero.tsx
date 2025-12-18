import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Instagram, Linkedin, Twitter, Facebook, MessageCircle } from "lucide-react";
import sudipProfile from "@/assets/sudip-profile.jpg";

const Hero = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/su__deep_01/", label: "Instagram", color: "hover:text-pink-400" },
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
      {/* AI-Enhanced Background with Neural Network Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with AI glow */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl animate-pulse delay-1000 opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-accent/30 rounded-full blur-2xl animate-spin-slow"></div>
        
        {/* Neural network lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="currentColor" className="text-primary/40"/>
              </pattern>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
            <path d="M0,300 Q400,100 800,300 T1600,300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
            <path d="M0,600 Q400,400 800,600 T1600,600" stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="animate-pulse delay-500"/>
          </svg>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-bounce delay-300 opacity-60"></div>
        <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-secondary rounded-full animate-bounce delay-700 opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary rounded-full animate-bounce delay-1000 opacity-60"></div>
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
                <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mb-2">
                  Hi, I'm
                </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-glow relative">
                  Sudip Mahato
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-ping"></div>
                </span>
                <span className="block text-xl md:text-2xl lg:text-3xl font-medium text-accent mt-2">
                  Creative Developer & Digital Explorer
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Transforming ideas into digital experiences through{" "}
                <span className="text-accent font-medium hover:text-primary transition-colors cursor-pointer">code</span>,{" "}
                <span className="text-primary font-medium hover:text-accent transition-colors cursor-pointer">design</span>,{" "}
                and <span className="text-secondary font-medium hover:text-primary transition-colors cursor-pointer">creativity</span>.
                <br />
                <span className="text-sm text-muted-foreground/80 mt-2 inline-block">
                  🚀 Building from Nepal 🇳🇵 • Learning & Growing Daily
                </span>
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

          {/* Right side - AI-Enhanced Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative">
                {/* AI Neural Network Animation */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 400 400">
                    <defs>
                      <radialGradient id="neuralGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1"/>
                      </radialGradient>
                    </defs>
                    {/* Neural nodes */}
                    <circle cx="100" cy="100" r="3" fill="hsl(var(--primary))" className="animate-pulse">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="300" cy="150" r="2" fill="hsl(var(--accent))" className="animate-pulse delay-300">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="200" cy="300" r="2.5" fill="hsl(var(--secondary))" className="animate-pulse delay-700">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    {/* Neural connections */}
                    <path d="M100,100 Q200,50 300,150" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.3" className="animate-pulse"/>
                    <path d="M300,150 Q250,225 200,300" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" opacity="0.3" className="animate-pulse delay-500"/>
                  </svg>
                </div>
                
                {/* Multi-layered glowing effects */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-secondary rounded-full blur-2xl opacity-15 animate-pulse delay-500"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-25 animate-pulse delay-1000"></div>
                
                {/* Profile image container with holographic effect */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-elevated group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <img
                    src={sudipProfile}
                    alt="Sudip Mahato - AI-Enhanced Digital Developer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 filter contrast-110 saturate-110"
                  />
                  {/* Holographic scan line */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-8 animate-scan opacity-0 group-hover:opacity-100"></div>
                  {/* AI data overlay */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-card/90 backdrop-blur-sm rounded-lg p-2 text-xs">
                      <div className="text-primary font-mono">AI_STATUS: ACTIVE</div>
                      <div className="text-accent font-mono">SKILLS: LOADING...</div>
                    </div>
                  </div>
                </div>

                {/* Enhanced floating elements with AI theme */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-float">
                  <span className="text-2xl">🤖</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center shadow-accent-glow animate-float delay-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute top-1/4 -left-4 w-12 h-12 bg-accent/80 rounded-full flex items-center justify-center shadow-accent-glow animate-bounce delay-700">
                  <span className="text-lg">🧠</span>
                </div>
                <div className="absolute bottom-1/4 -right-4 w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center shadow-glow animate-bounce delay-1000">
                  <span className="text-lg">💡</span>
                </div>
                
                {/* AI data points */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-12 right-12 w-2 h-2 bg-green-400 rounded-full animate-ping delay-500 opacity-60"></div>
                <div className="absolute top-1/2 right-6 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping delay-1000 opacity-60"></div>
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