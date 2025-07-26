
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Instagram, MessageCircle, Trophy } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/M-HUNAIN-RIASAT",
      handle: "@M-HUNAIN-RIASAT"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/m-hunain-riasat",
      handle: "/in/m-hunain-riasat"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/nain.riasat/",
      handle: "@nain.riasat"
    },
    {
      icon: MessageCircle,
      name: "Discord",
      url: "https://discord.com/users/mhunainriasat",
      handle: "mhunainriasat"
    },
    {
      icon: Trophy,
      name: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/users/muhammadhunain-3739/",
      handle: "Level 6 • 19 Badges • 5 Trophies"
    },
  ];

  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Connect With Me
        </h3>
        <div className="space-y-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <social.icon size={20} />
              <div>
                <div className="font-medium">{social.name}</div>
                <div className="text-sm">{social.handle}</div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialLinks;
