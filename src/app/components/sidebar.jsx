"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  FileText,
  Briefcase,
  MessageSquare,
  Star,
  Menu,
  X,
  LayoutDashboard,
} from "lucide-react";
import DarkAndLightButton from "./DarkAndLightButton";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  // { name: "Resume", href: "/resume", icon: FileText },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  // { name: "Testimonials", href: "/testimonials", icon: Star },
  { name: "Contact", href: "/contact", icon: MessageSquare },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [mounted, setMounted] = useState(false); // Prevent mismatch

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    // Simulating user authentication
    // In a real app, you'd get this from your auth system
    setUserEmail("yaseenalhassan2@gmail.com");

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const showDashboard = userEmail === "yaseenalhassan2@gmail.com";

  //  error handle

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent mismatch

  //   const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // if (!isClient) return null; // Avoid SSR rendering mismatch

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-orange-500 text-white rounded-md"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      )}
      <aside
        className={classNames(
          "fixed left-0 top-0 h-screen w-64 bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-400 animate-gradient p-6 transition-transform duration-300 ease-in-out z-40",
          isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <div className="flex items-center justify-between space-x-4 mb-4 ">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img
                  src={`https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png`}
                  alt="Profile"
                  className="w-full h-full object-cover border-4 border-white rounded-full shadow-2xl "
                />
              </div>
              <div className="p-2  rounded-full">
                <DarkAndLightButton />
              </div>
            </div>
            <h2 className="text-xl font-bold text-white">Your Name</h2>
            <p className="text-white/80">Developer & Designer</p>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={classNames(
                        "flex items-center space-x-3 px-4 py-2 rounded-lg text-white/90 hover:bg-white/10 transition-colors",
                        isActive && "bg-white/20"
                      )}
                      onClick={() => isMobile && setIsOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
              {showDashboard && (
                <li>
                  <Link
                    href="/"
                    className={classNames(
                      "flex items-center space-x-3 px-4 py-2 rounded-lg text-white/90 hover:bg-white/10 transition-colors",
                      pathname.startsWith("/dashboard") && "bg-white/20"
                    )}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Dashboard</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div className="mt-auto">
            <p className="text-white/60 text-sm">© 2024 All rights reserved.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
