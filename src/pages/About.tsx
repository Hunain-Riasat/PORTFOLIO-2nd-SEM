
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Code, Palette, Zap, GraduationCap, Users } from "lucide-react";

const About = () => {
  const skills = [
    { name: "C++", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "Python", level: 60 },
    { name: "UI/UX Design", level: 85 },
    { name: "Figma", level: 80 },
  ];

  const certifications = [
    "Meta UX/UI Design Certification (Coursera)",
    "KodeKloud: Fundamentals of DevOps",
    "LinkedIn Learning: Cybersecurity Awareness",
    "University of Sydney: Positive Psychiatry & Mental Health",
    "Google Skill Badges: Generative AI, LLMs",
  ];

  const values = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Writing clean, efficient code using OOP principles and modern technologies.",
    },
    {
      icon: Palette,
      title: "Design Innovation",
      description: "Creating intuitive user experiences with focus on aesthetics and functionality.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Leading initiatives and building connections in tech communities.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Always expanding knowledge in emerging technologies and best practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-[hsl(var(--background))] dark:to-[hsl(var(--background))]">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm Muhammad Hunain Riasat, a passionate Software Engineering student at COMSATS University Lahore 
                with a current CGPA of 3.75, dedicated to building innovative digital solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                As an aspiring full-stack developer, graphic designer, and tech community builder, 
                I combine technical expertise with creative vision to deliver impactful projects. 
                Currently serving as a Strategist at MLSA CUI Lahore and IMUN Campus Ambassador.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My journey spans from being a board topper in Matric to developing solutions 
                that have reached 500+ users, always striving for excellence in everything I do.
              </p>
            </div>
            
            <div className="animate-scale-in">
              <img
                src="/lovable-uploads/ec116160-a817-4663-be0a-def8f015dec3.png"
                alt="Modern Artisan About"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-8 text-center">
              Education & Background
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="dark:bg-[hsl(var(--card))] dark:border-[hsl(var(--border))]">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Current Degree
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    BS Software Engineering<br />
                    COMSATS University, Lahore<br />
                    2nd Semester - CGPA: 3.75
                  </p>
                </CardContent>
              </Card>
              
              <Card className="dark:bg-[hsl(var(--card))] dark:border-[hsl(var(--border))]">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Intermediate
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    FSc Pre-Medical<br />
                    Completed in Pakistan<br />
                    Strong Academic Performance
                  </p>
                </CardContent>
              </Card>
              
              <Card className="dark:bg-[hsl(var(--card))] dark:border-[hsl(var(--border))]">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Matriculation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Board Topper<br />
                    High Academic Achievement<br />
                    Foundation of Excellence
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-12 text-center">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[hsl(var(--foreground))]">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Certifications & Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]">{cert}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-12 text-center">
              What Drives Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in bg-[hsl(var(--card))] border border-[hsl(var(--border))]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                      <value.icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
