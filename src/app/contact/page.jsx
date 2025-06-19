"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";
import ThreadsBackground from "../components/ThreadsBackground";
import MediaIcons from "../components/MediaIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "yaseenalhassan2@gmail.com",
      link: "mailto:yaseenalhassan2@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, USA",
      link: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <ThreadsBackground />

      <div className="relative z-10 p-8 md:p-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's collaborate and bring your vision to
            life with cutting-edge technology and creative design.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -5 }}
                    className="block group"
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                            {info.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Working Hours
                </h3>
              </div>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600 dark:text-gray-300">
                      {schedule.day}
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <MediaIcons />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Send Me a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  I'd love to hear about your project. Fill out the form below
                  and I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-300">
                    Thank you! Your message has been sent successfully.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url('/placeholder.svg?height=100&width=100')",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Something Amazing?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Whether you need a website, mobile app, or digital strategy, I'm
                here to help turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-white text-orange-500 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-orange-500 transition-all duration-300"
                >
                  Learn More About Me
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
