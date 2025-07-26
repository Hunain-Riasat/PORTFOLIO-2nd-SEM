
import { Card, CardContent } from "@/components/ui/card";

const ContactCTA = () => {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Let's Work Together
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I'm always excited to take on new challenges and collaborate 
          on innovative projects. Whether you're looking for web development, 
          UI/UX design, or need help with your tech community initiatives, 
          I'd love to hear from you.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Currently available for internships, freelance projects, 
          and full-time opportunities in software development and design.
        </p>
      </CardContent>
    </Card>
  );
};

export default ContactCTA;
