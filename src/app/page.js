import Image from "next/image";
import Link from "next/link";
// import profile from "/public/img/IMG_0098.jpg";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
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
          <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-gradient text-white px-6 py-3 rounded-lg w-fit hover:opacity-90 transition-opacity">
            More About Me
          </button>
        </Link>
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
