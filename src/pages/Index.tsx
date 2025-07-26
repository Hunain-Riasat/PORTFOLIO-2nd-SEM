
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      <Hero />
      <Stats />
      <FeaturedWork />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
