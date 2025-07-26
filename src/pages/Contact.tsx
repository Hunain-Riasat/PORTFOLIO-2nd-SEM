
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import SocialLinks from "@/components/SocialLinks";
import ContactCTA from "@/components/ContactCTA";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <ContactInfo />
              <SocialLinks />
              <ContactCTA />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
