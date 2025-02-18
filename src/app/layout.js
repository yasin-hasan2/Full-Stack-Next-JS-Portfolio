import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar";
import AOSInit from "./components/aos-init";
// import { ThemeProvider } from "next-themes";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper"; // Import the client component
// import { ThemeProvider } from "@/app/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // title: "Home || Next hero", --> you can use this , but you want to default then flow next
  title: {
    default: "Portfolio oF Yasin Al-Hasan",
    template: "%s || Yasin Al-Hasan",
  },
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className `}>
        <ThemeProviderWrapper
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex">
            <Sidebar />
            <main className="flex-1 min-h-screen bg-gray-50 md:ml-64 transition-all duration-300 ease-in-out">
              <AOSInit />
              {children}
            </main>
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
