"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  FolderPlus,
  FileText,
  Menu,
  X,
  Bell,
  Search,
  User,
  House,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: BarChart, text: "Analytics" },
  { href: "/dashboard/categories", icon: FolderPlus, text: "Categories" },
  { href: "/dashboard/addProjects", icon: FolderPlus, text: "Add Projects" },
  { href: "/dashboard/blogs", icon: FileText, text: "Blogs" },
  { href: "/", icon: House, text: "Home" },
];

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-400">
      {/* Top Navbar */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link href="/dashboard" className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
                  Dashboard
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    <item.icon className="inline-block w-4 h-4 mr-2" />
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side Items */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                <Bell className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors duration-200">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-500 focus:outline-none transition-colors duration-200"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="inline-block w-4 h-4 mr-2" />
                {item.text}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-6 sm:px-0"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
