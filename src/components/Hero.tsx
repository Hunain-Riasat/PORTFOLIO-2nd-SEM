
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="text-primary font-medium">Web dev ,Designer ,Coder & Mentor</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-[hsl(var(--foreground))] leading-tight">
              Muhammad
              <span className="block text-blue-600 dark:text-blue-400">Hunain Riasat</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
              Aspiring Full-Stack Developer | UI/UX Designer | Tech Community Builder
              <br />
              Building the future through code, design, and community impact.
            </p>
            
            <div className="flex items-center space-x-6 mt-6">
              <a href="https://github.com/M-HUNAIN-RIASAT" target="_blank" rel="noopener noreferrer" className="group text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <span className="relative inline-block">
                  <Github size={28} className="transition-transform group-hover:-translate-y-1 group-hover:scale-110" />
                  <span className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full pointer-events-none"></span>
                </span>
              </a>
              <a href="https://learn.microsoft.com/en-us/users/muhammadhunain-3739/" target="_blank" rel="noopener noreferrer" className="group text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <span className="relative inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:-translate-y-1 group-hover:scale-110">
                    <path d="M0 0v11.408h11.408V0H0zm12.594 0v11.408H24V0H12.594zM0 12.594V24h11.408V12.594H0zm12.594 0V24H24V12.594H12.594z"/>
                  </svg>
                  <span className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full pointer-events-none"></span>
                </span>
              </a>
              <a href="https://www.linkedin.com/in/m-hunain-riasat" target="_blank" rel="noopener noreferrer" className="group text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <span className="relative inline-block">
                  <Linkedin size={28} className="transition-transform group-hover:-translate-y-1 group-hover:scale-110" />
                  <span className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full pointer-events-none"></span>
                </span>
              </a>
              <a href="https://www.instagram.com/nain.riasat/" target="_blank" rel="noopener noreferrer" className="group text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <span className="relative inline-block">
                  <Instagram size={28} className="transition-transform group-hover:-translate-y-1 group-hover:scale-110" />
                  <span className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full pointer-events-none"></span>
                </span>
              </a>
              <a href="https://discord.com/users/mhunainriasat" target="_blank" rel="noopener noreferrer" className="group text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <span className="relative inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:-translate-y-1 group-hover:scale-110">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </svg>
                  <span className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full pointer-events-none"></span>
                </span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild className="group bg-blue-600 text-white dark:bg-blue-500 dark:text-white hover:bg-blue-700 dark:hover:bg-blue-400">
                <Link to="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-white" />
                </Link>
              </Button>
              <Button className="group bg-blue-600 text-white dark:bg-blue-500 dark:text-white hover:bg-blue-700 dark:hover:bg-blue-400" asChild>
                <a href="https://drive.google.com/file/d/1dmSXUGm8akzrHOHDNLPn_LgGWOte5OYs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4 text-white" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src="/lovable-uploads/ec116160-a817-4663-be0a-def8f015dec3.png"
                alt="Modern Artisan Hero"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-blue-500 rounded-xl shadow-lg p-6 animate-fade-in delay-300">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-100">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
