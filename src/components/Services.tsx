import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Palette, 
  Gamepad2, 
  Brain, 
  Share2, 
  Code2,
  Star,
  Clock,
  Zap
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Design",
      description: "Creating modern, responsive portfolio websites and basic web applications",
      features: [
        "Portfolio website design",
        "Responsive layouts",
        "Basic interactive features",
        "Modern UI/UX principles"
      ],
      level: "Learning",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Digital artwork, gaming posters, and social media content creation",
      features: [
        "Gaming poster design",
        "Social media graphics",
        "Meme creation",
        "Digital artwork"
      ],
      level: "Active",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      borderColor: "border-pink-400/20"
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Simple game prototypes and interactive experiences",
      features: [
        "Flappy Bird-style games",
        "Basic game mechanics",
        "Simple UI design",
        "Game prototyping"
      ],
      level: "Exploring",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20"
    },
    {
      icon: Brain,
      title: "AI-Assisted Projects",
      description: "Leveraging AI tools for enhanced creativity and productivity",
      features: [
        "AI-powered content creation",
        "Automated workflows",
        "Creative assistance",
        "Research and ideation"
      ],
      level: "Experimenting",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/20"
    },
    {
      icon: Share2,
      title: "Social Media Content",
      description: "Engaging content creation for various social platforms",
      features: [
        "Instagram content",
        "TikTok videos",
        "Engagement strategies",
        "Community building"
      ],
      level: "Active",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/20"
    },
    {
      icon: Code2,
      title: "Programming Projects",
      description: "Basic coding projects and automation scripts",
      features: [
        "Python scripting",
        "C programming",
        "Problem-solving",
        "Learning projects"
      ],
      level: "Learning",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20"
    }
  ];

  const processSteps = [
    {
      icon: Star,
      title: "Discovery",
      description: "Understanding your vision and requirements through discussion"
    },
    {
      icon: Zap,
      title: "Creation",
      description: "Bringing ideas to life with creativity and available tools"
    },
    {
      icon: Share2,
      title: "Collaboration",
      description: "Working together to refine and perfect the final result"
    },
    {
      icon: Clock,
      title: "Learning",
      description: "Growing skills through each project and challenge"
    }
  ];

  const getLevelBadgeVariant = (level: string) => {
    switch (level) {
      case "Active": return "default";
      case "Learning": return "secondary";
      case "Exploring": return "outline";
      case "Experimenting": return "outline";
      default: return "secondary";
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* AI-Enhanced Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-2xl animate-spin-slow"></div>
        
        {/* Service icons floating */}
        <div className="absolute top-1/4 left-1/6 opacity-5">
          <Globe className="w-20 h-20 text-primary animate-float" />
        </div>
        <div className="absolute bottom-1/4 right-1/6 opacity-5">
          <Brain className="w-24 h-24 text-accent animate-float delay-700" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm border-primary/20">
            Services & Offerings
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Guff chodna sakna kura haru{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Help With
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While I'm still developing my skills, I'm excited to collaborate on projects that match my current abilities and learning goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-card/50 backdrop-blur-sm border-border/50 hover:${service.borderColor} hover:shadow-glow transition-all duration-300 group`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <Badge variant={getLevelBadgeVariant(service.level)} className="text-xs">
                    {service.level}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 ${service.color.replace('text-', 'bg-')} rounded-full flex-shrink-0`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            My{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Approach
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-accent/20 hover:border-accent/40 hover:shadow-accent-glow transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Collaboration Note */}
        <Card className="bg-gradient-primary/10 backdrop-blur-sm border-primary/20 shadow-glow/50 max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">Let's Collaborate!</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm always excited to work on new projects that challenge me and help me grow. 
              Whether it's a simple web design, a creative graphic, or an experimental idea - 
              let's explore what we can create together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See My Work
              </Button>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">💡 Creative Ideas</Badge>
              <Badge variant="secondary" className="px-4 py-2">🚀 Growth Focused</Badge>
              <Badge variant="secondary" className="px-4 py-2">🤝 Collaborative</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;