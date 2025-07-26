
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    // Message length validation
    if (formData.message.length < 10) {
      toast({
        title: "Message too short",
        description: "Please enter a more detailed message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Store the submission in the database
      const { data: submissionData, error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
        .select()
        .single();

      if (dbError) {
        throw dbError;
      }

      console.log('Contact submission stored:', submissionData);

      // Send email notifications
      // Always send to hunainebay4@gmail.com
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          to: "hunainebay4@gmail.com"
        }
      });

      if (emailError) {
        console.error('Email sending error:', emailError);
        // Don't throw here - the submission was saved, just email failed
        toast({
          title: "Submission saved!",
          description: "Your message was saved, but there was an issue sending confirmation emails. I'll still get back to you!",
          variant: "default",
        });
      } else {
        console.log('Emails sent successfully:', emailData);
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you within 24 hours.",
        });
      }
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error submitting message",
        description: "There was a problem submitting your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="animate-fade-in dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="dark:text-white">Send Me a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="dark:text-gray-300">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <Label htmlFor="email" className="dark:text-gray-300">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="subject" className="dark:text-gray-300">Subject</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <Label htmlFor="message" className="dark:text-gray-300">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
