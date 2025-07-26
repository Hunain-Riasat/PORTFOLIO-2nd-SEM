
import { Award, Users, Briefcase, Star } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Briefcase,
      value: "20+",
      label: "Projects Completed",
    },
    {
      icon: Users,
      value: "500+",
      label: "Users Reached",
    },
    {
      icon: Award,
      value: "Level 6",
      label: "Microsoft Learn",
    },
    {
      icon: Star,
      value: "19",
      label: "MS Learn Badges",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-full mb-4">
                <stat.icon size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
