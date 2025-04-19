import { useState } from "react";
import { RevealOnScroll } from "../RevelOnScroll";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageLength, setMessageLength] = useState(0); // Track message length

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
        setMessageLength(0); // Reset message length after successful submission
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong. Please try again");
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12">
      <RevealOnScroll>

        {/* Mobile Version */}
        <div className="w-full max-w-md backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 md:hidden">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:bg-white/20"
              placeholder="Name..."
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:bg-white/20"
              placeholder="example@gmail.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                required
                rows={5}
                maxLength={1000}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:bg-white/20"
                placeholder="Your Message..."
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  setMessageLength(e.target.value.length); // Update message length
                }}
              />
              {messageLength >= 500 && (
                <div className={`absolute bottom-2 right-2 text-sm font-semibold ${messageLength >= 900 ? 'text-red-500' : 'text-white'} z-0`}>
                  {1000 - messageLength} characters left
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded-lg font-medium transition hover:scale-105 active:scale-95 focus:outline-none shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block w-full max-w-4xl backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-12">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="flex gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                className="w-1/2 bg-white/10 border border-white/20 rounded-lg px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:bg-white/20"
                placeholder="Name..."
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                required
                className="w-1/2 bg-white/10 border border-white/20 rounded-lg px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:bg-white/20"
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                required
                rows={6}
                maxLength={1000}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:bg-white/20"
                placeholder="Your Message..."
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  setMessageLength(e.target.value.length); // Update message length
                }}
              />
              {messageLength >= 500 && (
                <div className={`absolute bottom-2 right-3 text-sm font-semibold ${messageLength >= 900 ? 'text-red-500' : 'text-white'} z-0`}>
                  {1000 - messageLength} characters left
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-4 px-6 rounded-lg font-medium transition hover:scale-105 active:scale-95 focus:outline-none shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

      </RevealOnScroll>
    </section>
  );
};
