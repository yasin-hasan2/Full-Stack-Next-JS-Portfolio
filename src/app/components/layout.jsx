import { Inter } from "next/font/google";
import Navigation from "./navigation";
import AOSInit from "./aos-init";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 ${inter.className}`}
    >
      <Navigation />
      <AOSInit />
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
