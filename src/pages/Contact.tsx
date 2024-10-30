import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="relative mb-8">
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt="Contact us"
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-4xl font-bold text-white absolute bottom-4 left-4 shadow-text">Contact Us</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4">We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition-colors">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="mr-2 mt-1 text-yellow-500" />
              <p>Dir: rep. de Siria | S3004GLE - Santa Fe - Argentina</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-yellow-500" />
              <p>Tel: +54 (0342) 652 6440</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-yellow-500" />
              <p>Email: lainteq@lainteq.com.ar</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;