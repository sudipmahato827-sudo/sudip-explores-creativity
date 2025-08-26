import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Palette, 
  Gamepad2, 
  Globe, 
  Brain, 
  Share2,
  FileCode,
  Brush,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Globe,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      skills: [
        { name: "HTML/CSS", level: 70, description: "Building responsive layouts" },
        { name: "JavaScript", level: 50, description: "Interactive web features" },
        { name: "React Basics", level: 40, description: "Component-based development" },
        { name: "Portfolio Design", level: 65, description: "Personal project experience" },
      ]
    },
    {
      title: "Programming",
      icon: Code2,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      skills: [
        { name: "Python", level: 60, description: "Scripting and basic projects" },
        { name: "C Programming", level: 45, description: "Fundamental programming concepts" },
        { name: "Problem Solving", level: 55, description: "Logical thinking development" },
        { name: "Version Control", level: 35, description: "Git basics for projects" },
      ]
    },
    {
      title: "Game Development",
      icon: Gamepad2,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      skills: [
        { name: "Game Logic", level: 50, description: "Flappy Bird style games" },
        { name: "Basic Physics", level: 40, description: "Simple game mechanics" },
        { name: "UI Design", level: 45, description: "Game interface creation" },
        { name: "Prototyping", level: 55, description: "Quick game concepts" },
      ]
    },
    {
      title: "Graphic Design",
      icon: Palette,
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      skills: [
        { name: "Gaming Posters", level: 75, description: "PUBG, Free Fire designs" },
        { name: "Meme Creation", level: 80, description: "Social media content" },
        { name: "Visual Composition", level: 60, description: "Layout and design principles" },
        { name: "Digital Art", level: 50, description: "Creative digital artwork" },
      ]
    },
    {
      title: "AI & Automation",
      icon: Brain,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      skills: [
        { name: "AI Tools", level: 65, description: "ChatGPT, design assistants" },
        { name: "Workflow Automation", level: 40, description: "Basic process optimization" },
        { name: "Content Generation", level: 70, description: "AI-assisted creativity" },
        { name: "Research Skills", level: 75, description: "Finding and using AI resources" },
      ]
    },
    {
      title: "Content Creation",
      icon: Share2,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      skills: [
        { name: "Social Media", level: 85, description: "Instagram, TikTok, Facebook" },
        { name: "Content Strategy", level: 55, description: "Audience engagement" },
        { name: "Video Editing", level: 45, description: "Basic video content" },
        { name: "Community Building", level: 60, description: "Growing online presence" },
      ]
    }
  ];

  const learningGoals = [
    { icon: FileCode, title: "Advanced JavaScript", description: "Modern frameworks and libraries" },
    { icon: Code2, title: "Python Mastery", description: "Data science and web development" },
    { icon: Brush, title: "Advanced Design", description: "Professional design tools and techniques" },
    { icon: Zap, title: "Full-Stack Development", description: "End-to-end web application development" },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm border-primary/20">
            Skills & Abilities
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What I'm{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Learning
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While I'm still building my expertise, here's what I'm actively exploring and the progress I'm making
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/40 hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Goals */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              What's Next?
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningGoals.map((goal, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-accent/20 hover:border-accent/40 hover:shadow-accent-glow transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <goal.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {goal.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Note */}
        <Card className="bg-gradient-primary/10 backdrop-blur-sm border-primary/20 shadow-glow/50 max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">My Learning Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "I might not be an expert yet, but I'm committed to consistent learning and improvement. 
              Every project, every tutorial, every mistake is a step forward in my journey. 
              The goal isn't perfection - it's progress." 
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">🎯 Growth Mindset</Badge>
              <Badge variant="secondary" className="px-4 py-2">📚 Continuous Learning</Badge>
              <Badge variant="secondary" className="px-4 py-2">🚀 Future Ready</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;