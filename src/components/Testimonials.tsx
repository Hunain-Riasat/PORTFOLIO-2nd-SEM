
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Exceptional work! The attention to detail and creative vision exceeded our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      content: "Professional, reliable, and incredibly talented. Delivered exactly what we needed.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, DesignStudio",
      content: "A true artisan who brings creativity and technical expertise to every project.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Testimonials from satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in dark:bg-gray-700 dark:border-gray-600"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
