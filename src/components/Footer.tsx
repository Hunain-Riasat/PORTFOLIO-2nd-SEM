
import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail, MessageCircle, Trophy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-12 border-t border-[hsl(var(--border))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--foreground))]">M HUNAIN RIASAT</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Software Engineering Student | Full-Stack Developer | UI/UX Designer | Tech Community Builder
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/M-HUNAIN-RIASAT" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/m-hunain-riasat" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/nain.riasat/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://discord.com/users/mhunainriasat" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle size={24} />
              </a>
              <a 
                href="https://learn.microsoft.com/en-us/users/muhammadhunain-3739/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Trophy size={24} />
              </a>
              <a 
                href="mailto:hunainriasat@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Software Engineering</li>
              <li>Community Building</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 M HUNAIN RIASAT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
