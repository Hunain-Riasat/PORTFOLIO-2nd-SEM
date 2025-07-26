import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedWork = () => {
  const projects = [
    {
      title: "Little Lemon Restaurant",
      description: "A modern restaurant website with online reservation system, built with React and responsive design.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      liveUrl: "https://little-lemon-restaurant-hunain.netlify.app/",
      githubUrl: "https://github.com/M-HUNAIN-RIASAT/little-lemon-restaurant"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React", "API Integration", "JavaScript"],
      liveUrl: "https://weather-app-hunain.netlify.app/",
      githubUrl: "https://github.com/M-HUNAIN-RIASAT/weather-app"
    },
    {
      title: "Calculator App",
      description: "A sleek and functional calculator with advanced mathematical operations.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["React", "JavaScript", "CSS"],
      liveUrl: "https://calculator-app-hunain.netlify.app/",
      githubUrl: "https://github.com/M-HUNAIN-RIASAT/calculator-app"
    }
  ];

  return (
    <section className="py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground">
            Some of my recent projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in bg-[hsl(var(--card))] border border-[hsl(var(--border))]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-3 text-[hsl(var(--foreground))]">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <div className="w-full flex justify-center">
                    <Button className="w-full max-w-xs bg-blue-600 text-white dark:bg-blue-500 dark:text-white hover:bg-blue-700 dark:hover:bg-blue-400" size="lg" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                        <span className="ml-2">GitHub</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/portfolio">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
