import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar";
import AOSInit from "./components/aos-init";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Modern Portfolio",
  description: "A modern portfolio website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-h-screen bg-gray-50 md:ml-64 transition-all duration-300 ease-in-out">
            <AOSInit />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
