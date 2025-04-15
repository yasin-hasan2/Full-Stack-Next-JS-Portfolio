"use client";
import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "./components/socialMediaIcons";

// import profile from "/public/img/IMG_0098.jpg";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div
        className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center"
        data-aos="fade-right"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi There!
          <br />
          I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-gradient">
            Yasin Al Hasan
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Frontend Developer & UI/UX Designer
        </p>
        <Link href="/about">
          {/* <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-gradient text-white px-6 py-3 rounded-lg w-fit hover:opacity-90 transition-opacity">
            More About Me
          </button> */}

          <button class="group relative px-10 py-5 rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-400 animate-gradient text-black font-bold tracking-wider uppercase text-sm hover:from-yellow-500 hover:via-amber-600 hover:to-yellow-700 transition-opacity transform hover:rotate-1  duration-300 ease-out shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] active:scale-90 overflow-hidden before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-amber-400/50 before:transition-all before:duration-300 hover:before:border-amber-300 hover:before:scale-105">
            <span class="flex items-center gap-2 relative z-10">
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                class="w-5 h-5 animate-spin duration-1000 "
              >
                <path
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                ></path>
              </svg>
              More About Me
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
              >
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke-width="2.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
            <div class="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-tl from-amber-200/40 via-transparent to-transparent"></div>
            <div class="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
          </button>
        </Link>
        <div>
          <SocialMediaIcons />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-gray-100 min-h-[50vh] md:min-h-screen">
        {/* <Image
          src={profile}
          alt="Profile"
          // layout="fill"
          // objectFit="cover"
          className=" object-cover"
          height={800}
          width={600}
        /> */}
        <Image
          src="/img/IMG_0098.jpg"
          alt="Profile"
          // layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
          height={800}
          width={600}
        />
      </div>
    </div>
  );
}
