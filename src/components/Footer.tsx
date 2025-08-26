import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook, 
  MessageCircle,
  Heart,
  ArrowUp,
  Mail
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/su__deep__01/", label: "Instagram" },
    { icon: MessageCircle, href: "https://www.tiktok.com/@sudeepmahato_01", label: "TikTok" },
    { icon: Github, href: "https://github.com/sudipmahato827-sudo", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/su_deep_01", label: "X (Twitter)" },
    { icon: Facebook, href: "https://www.facebook.com/sudip.mahato.33001", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sudip-mahato-a39a83328/", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = targetId === 'home' ? document.body : document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-card/30 backdrop-blur-sm border-t border-border">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                  Sudip Mahato
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  A passionate explorer from Nepal, learning and growing in the world of technology, 
                  design, and creativity. Always excited to connect and collaborate!
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="secondary" className="px-3 py-1">🇳🇵 Nepal</Badge>
                <Badge variant="secondary" className="px-3 py-1">👨‍🎓 Student</Badge>
                <Badge variant="secondary" className="px-3 py-1">💻 Tech Enthusiast</Badge>
                <Badge variant="secondary" className="px-3 py-1">🎨 Creative</Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:sudipmahato827@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  sudipmahato827@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-accent">Connect With Me</h4>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/40 hover:shadow-glow transition-all duration-300 hover:scale-105 group text-center"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-3">
                  Follow my journey and latest projects!
                </p>
                <Button 
                  variant="accent" 
                  size="sm"
                  onClick={() => scrollToSection('#contact')}
                  className="w-full"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Sudip Mahato. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Nepal</span>
            </div>
            
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                Built with React & Tailwind CSS
              </p>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full hover:bg-primary/10 hover:text-primary"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;