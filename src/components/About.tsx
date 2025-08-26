import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Heart, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Class 12 Student",
      details: "Currently pursuing higher secondary education while exploring tech"
    },
    {
      icon: MapPin,
      title: "Location", 
      description: "Nepal 🇳🇵",
      details: "Based in the beautiful country of Nepal, bringing global perspective"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Tech Explorer",
      details: "Passionate about learning and experimenting with new technologies"
    },
    {
      icon: Target,
      title: "Goal",
      description: "Skill Building",
      details: "Focused on building practical skills through hands-on projects"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* AI-Enhanced Background effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Neural network pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="hsl(var(--primary))" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutGrid)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm border-primary/20">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Getting to know{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sudip
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A young enthusiast from Nepal, embracing the journey of learning and growth in the tech world
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Story</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Hey there! I'm Sudip, and honestly, I'm still figuring things out. 
                    Currently a <span className="text-foreground font-medium">Class 12 student</span> from Nepal, 
                    I might be "berojgar" (unemployed) with "no skills yet," but I'm hungry to learn and grow.
                  </p>
                  <p className="leading-relaxed">
                    I'm exploring everything from <span className="text-accent">web design</span> and 
                    <span className="text-primary"> programming</span> to 
                    <span className="text-accent"> graphic design</span> and 
                    <span className="text-primary"> content creation</span>. 
                    Every day is a new opportunity to discover what excites me most.
                  </p>
                  <p className="leading-relaxed">
                    Sure, I don't have a fancy portfolio yet, but I believe in starting somewhere. 
                    This website itself is part of my learning journey - a step towards building 
                    something meaningful while developing my skills.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">What Drives Me</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Creating digital experiences that solve real problems</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Learning through experimentation and hands-on projects</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Building a strong foundation in both technical and creative skills</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Connecting with like-minded people and learning from the community</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/40 hover:shadow-glow transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-primary font-medium mb-2">{item.description}</p>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-secondary/10 backdrop-blur-sm border-accent/20 shadow-accent-glow/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Fun Fact</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe that being "berojgar" is just a temporary state - a launching pad for something greater. 
                Every expert was once a beginner, and every journey starts with a single step. This is mine! 🚀
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;