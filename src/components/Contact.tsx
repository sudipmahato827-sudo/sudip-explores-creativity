import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook, 
  MessageCircle,
  Check,
  Loader2
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sudipmahato827@gmail.com",
      href: "mailto:sudipmahato827@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9767776647",
      href: "tel:+9779767776647",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nepal 🇳🇵",
      href: "#",
      color: "text-orange-400"
    }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/su__deep__01/", 
      label: "Instagram", 
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-400/10"
    },
    { 
      icon: MessageCircle, 
      href: "https://www.tiktok.com/@sudeepmahato_01", 
      label: "TikTok", 
      color: "hover:text-white",
      bgColor: "hover:bg-white/10"
    },
    { 
      icon: Github, 
      href: "https://github.com/sudipmahato827-sudo", 
      label: "GitHub", 
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-300/10"
    },
    { 
      icon: Twitter, 
      href: "https://x.com/su_deep_01", 
      label: "X (Twitter)", 
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-400/10"
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/sudip.mahato.33001", 
      label: "Facebook", 
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500/10"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/sudip-mahato-a39a83328/", 
      label: "LinkedIn", 
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-600/10"
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Sudip Mahato'
      };

      await emailjs.send(
        'service_793lwvq', // Service ID
        'template_asi4cwe', // Template ID
        templateParams,
        'KsivW_JYxcjQfY2wg' // Public Key
      );

      toast({
        title: "instagram ma gar mula berojgar...eeuta berojgar ly aarko berojlai lai mail gareo🤣🤣🤣🙏",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or reach out via email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-secondary opacity-5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm border-primary/20">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project idea, want to collaborate, or just say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className={`w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`w-6 h-6 text-primary-foreground`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <a 
                          href={info.href}
                          className={`text-lg font-medium hover:text-primary transition-colors ${info.color}`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">Find Me Online</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with me on social media for updates, projects, and creative content!
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-glow group text-center ${social.color} ${social.bgColor}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        {social.label}
                      </p>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-secondary/10 backdrop-blur-sm border-accent/20 shadow-accent-glow/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4 text-accent">Quick Response Time</h3>
                <p className="text-muted-foreground">
                  I typically respond within 24 hours. For urgent matters, 
                  feel free to reach out via WhatsApp or call directly!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 backdrop-blur-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 backdrop-blur-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 backdrop-blur-sm"
                      placeholder="Let's work together!"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background/50 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary/10 backdrop-blur-sm border-primary/20 shadow-glow/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Collaborate?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Whether you have a project in mind, want to share ideas, or just want to connect - 
                I'm always excited to meet new people and explore new opportunities!
              </p>
              <div className="flex justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2">🚀 Open to Projects</Badge>
                <Badge variant="secondary" className="px-4 py-2">💡 Love New Ideas</Badge>
                <Badge variant="secondary" className="px-4 py-2">🤝 Always Learning</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;