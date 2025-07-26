import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Advanced Portfolio Website",
      description: "Fully professional portfolio with animations, dark mode, project filtering, contact form, and performance optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      category: "web",
      tags: ["React", "Tailwind CSS", "Dark Mode", "Animations"],
      year: "2024",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Daraz Clone",
      description: "Front-page clone of the Daraz online shopping platform to enhance CSS skills with responsive layout used by 500+ users.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      category: "web",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      year: "2024",
      status: "Completed"
    },
    {
      id: 3,
      title: "Student Management System",
      description: "Implemented using Object-Oriented Programming principles to manage student data, grading, and records efficiently.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
      category: "desktop",
      tags: ["C++", "OOP", "Data Management"],
      year: "2024",
      status: "Completed"
    },
    {
      id: 4,
      title: "Nain's Editor",
      description: "Custom-built text editor with enhanced functionalities such as word count, dark mode, and real-time saving.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
      category: "desktop",
      tags: ["Java", "GUI", "Text Processing"],
      year: "2024",
      status: "Completed"
    },
    {
      id: 5,
      title: "Nexus News & Weather App",
      description: "Real-time application displaying global news headlines and weather updates using external APIs.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800",
      category: "web",
      tags: ["JavaScript", "APIs", "Real-time Data"],
      year: "2024",
      status: "Completed"
    },
    {
      id: 6,
      title: "Task Manager",
      description: "Task management system built with JavaScript to add, delete, and mark tasks with local storage support.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
      category: "web",
      tags: ["JavaScript", "Local Storage", "DOM Manipulation"],
      year: "2024",
      status: "Completed"
    },
    {
      id: 7,
      title: "Weather Web App",
      description: "Dynamic weather app using APIs to show temperature, conditions, and wind/humidity data by location.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800",
      category: "web",
      tags: ["JavaScript", "Weather API", "Geolocation"],
      year: "2024",
      status: "Completed"
    },
    {
      id: 8,
      title: "Little Lemon Food Ordering (UI/UX)",
      description: "Complete UI/UX design system with high-fidelity prototypes, user research, and micro-interactions for food ordering.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      category: "design",
      tags: ["Figma", "UI/UX", "Prototyping", "Design System"],
      year: "2024",
      status: "Completed"
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Development" },
    { key: "desktop", label: "Desktop Apps" },
    { key: "design", label: "UI/UX Design" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[hsl(var(--foreground))] mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my projects spanning web development, desktop applications, and UI/UX design.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-muted p-1">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeFilter === filter.key
                      ? "bg-[hsl(var(--card))] text-primary shadow-sm"
                      : "text-muted-foreground hover:text-[hsl(var(--foreground))]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in bg-[hsl(var(--card))] border border-[hsl(var(--border))]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                        {project.title}
                      </h3>
                      <div className="text-right">
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                        <div className={`text-xs font-medium mt-1 ${
                          project.status === 'Completed' 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-primary'
                        }`}>
                          {project.status}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
