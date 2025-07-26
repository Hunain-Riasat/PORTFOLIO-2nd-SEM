
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Lahore, Pakistan",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+92 318 7681275",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hunainriasat@gmail.com",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
    },
  ];

  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Contact Information
        </h3>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center">
                  <info.icon size={20} />
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">{info.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{info.details}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
