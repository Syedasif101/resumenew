import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission (would normally save to DB)
  app.post('/api/contact', (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // For now, just log the contact form submission
      console.log('Contact form submission:', { name, email, subject, message });
      
      // Return success
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: 'Failed to send message' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
