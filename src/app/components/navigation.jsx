import Link from "next/link";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <NavLink href="/" icon={<Home className="w-5 h-5" />} text="Home" />
            <NavLink
              href="/about"
              icon={<User className="w-5 h-5" />}
              text="About"
            />
            <NavLink
              href="/projects"
              icon={<Briefcase className="w-5 h-5" />}
              text="Projects"
            />
            <NavLink
              href="/skills"
              icon={<Code className="w-5 h-5" />}
              text="Skills"
            />
            <NavLink
              href="/contact"
              icon={<Mail className="w-5 h-5" />}
              text="Contact"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, text }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 text-white hover:text-gray-300 transition duration-300"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
