import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaChess } from "react-icons/fa";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center bg-secondary py-20 px-4 md:px-8">
      <motion.div
        className="container mx-auto section-transition"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-textSecondary mt-4 max-w-2xl mx-auto text-lg">Feel free to reach out if you want to collaborate with me, or simply have a chat</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-1/2"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" className="block text-textPrimary font-poppins mb-2">Your Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-cardBg text-textPrimary border border-gray-700 rounded-lg focus:outline-none focus:border-accent" 
                  placeholder="Syed asif"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-textPrimary font-poppins mb-2">Your Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-cardBg text-textPrimary border border-gray-700 rounded-lg focus:outline-none focus:border-accent" 
                  placeholder="asif@example.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-textPrimary font-poppins mb-2">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-cardBg text-textPrimary border border-gray-700 rounded-lg focus:outline-none focus:border-accent" 
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-textPrimary font-poppins mb-2">Your Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5} 
                  className="w-full px-4 py-3 bg-cardBg text-textPrimary border border-gray-700 rounded-lg focus:outline-none focus:border-accent resize-none" 
                  placeholder="Hey, I would like to talk about..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white font-poppins py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            variants={fadeIn("left", "tween", 0.3, 1)}
          >
            <div className="bg-cardBg p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-poppins font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold mb-1">Location</h4>
                    <p className="text-textSecondary">Srinagar, JK</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold mb-1">Email</h4>
                    <p className="text-textSecondary">syed.asif@outlook.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <FaPhone className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold mb-1">Phone</h4>
                    <p className="text-textSecondary"> 919596283631 </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-poppins font-semibold mb-4">Find me on</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/Syedasif101" className="bg-accent/10 hover:bg-accent/20 p-3 rounded-lg text-accent transition-colors">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/syed-asif101/" className="bg-accent/10 hover:bg-accent/20 p-3 rounded-lg text-accent transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.chess.com/member/syed_73" className="bg-accent/10 hover:bg-accent/20 p-3 rounded-lg text-accent transition-colors">
                    <FaChess />
                  </a>
                  <a href="https://www.instagram.com/aasif.io/" className="bg-accent/10 hover:bg-accent/20 p-3 rounded-lg text-accent transition-colors">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
