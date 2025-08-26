import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Play, 
  Image as ImageIcon,
  Code2,
  Palette,
  Plus,
  Star,
  Clock,
  Zap
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "This very website you're looking at - a modern, responsive portfolio built with React and Tailwind CSS",
      category: "Web Development",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "Live",
      icon: Code2,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Gaming Poster Collection",
      description: "A series of vibrant gaming posters designed for PUBG and Free Fire communities",
      category: "Graphic Design",
      technologies: ["Digital Art", "Gaming Aesthetics", "Social Media"],
      status: "Ongoing",
      icon: Palette,
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      links: {
        view: "#"
      }
    },
    {
      title: "Flappy Bird Clone",
      description: "A simple but engaging Flappy Bird-style game built to learn game development basics",
      category: "Game Development",
      technologies: ["Game Logic", "Physics", "UI Design"],
      status: "Prototype",
      icon: Play,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      links: {
        demo: "#"
      }
    }
  ];

  const upcomingProjects = [
    {
      title: "Social Media Dashboard",
      description: "A unified dashboard to manage multiple social media accounts",
      icon: Zap,
      color: "text-cyan-400"
    },
    {
      title: "Python Automation Scripts",
      description: "Collection of useful automation tools for daily tasks",
      icon: Code2,
      color: "text-green-400"
    },
    {
      title: "Creative Meme Generator",
      description: "AI-assisted tool for creating engaging social media content",
      icon: ImageIcon,
      color: "text-orange-400"
    },
    {
      title: "Portfolio Showcase Site",
      description: "Advanced portfolio with interactive elements and animations",
      icon: Star,
      color: "text-yellow-400"
    }
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Live": return "default";
      case "Ongoing": return "secondary";
      case "Prototype": return "outline";
      default: return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "text-green-400";
      case "Ongoing": return "text-blue-400";
      case "Prototype": return "text-yellow-400";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm border-primary/20">
            Portfolio & Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Creative Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I'm working on and learning from. Each project is a step forward in my development journey.
          </p>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Current Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/40 hover:shadow-glow transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <Badge variant={getStatusBadgeVariant(project.status)} className="text-xs">
                      <div className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(project.status).replace('text-', 'bg-')}`}></div>
                      {project.status}
                    </Badge>
                  </div>

                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Category:</p>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {project.links.live && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    )}
                    {project.links.github && (
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                    {project.links.view && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <ImageIcon className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              What's Coming Next
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-accent/20 hover:border-accent/40 hover:shadow-accent-glow transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-4">
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Showcase Placeholder */}
        <div className="text-center">
          <Card className="bg-gradient-primary/5 backdrop-blur-sm border-primary/10 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Plus className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">More Projects Coming Soon!</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm constantly working on new projects and learning experiences. 
                This portfolio will grow as I develop my skills and create more exciting work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Suggest a Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://github.com/sudipmahato827-sudo', '_blank')}
                >
                  Follow My Progress
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;