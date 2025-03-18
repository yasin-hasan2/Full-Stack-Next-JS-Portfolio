import ProjectsCard from "./portfolio-Components/ProjectsCard";

const getProjectsData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/projects", {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return { cars: [] }; // ✅ Return an empty array to prevent crashes
  }
};

export default async function Portfolio() {
  const { allProjects } = await getProjectsData(); // Fetch data
  return (
    <div className="p-12 bg-white text-black dark:bg-black dark:text-white">
      <ProjectsCard projects={allProjects} />
    </div>
  );
}

// const projects = [
//   {
//     id: 1,
//     project_name: "Luxe Stay Retreat",
//     category: "UI/UX",
//     description:
//       "A MERN Stack Restaurant website, simplifies Online food buying system. Personalized plans, and . Start today for a better tomorrow. AdminId: Admin02@gmail.com , pass : Admin2@ ",
//     project_thumnail:
//       "https://i.ibb.co.com/fBqQdGh/luxe-stay-retreat-1hod-vercel-app.png",
//     images:
//       "https://img.freepik.com/free-vector/nothern-lights-landing-page_23-2148280855.jpg",
//     technology: [
//       "React",
//       "Tailwinds",
//       "Jwt",
//       "Node",
//       "MongoDB",
//       "ExpressJs",
//       "Firebase",
//       "TanStack Query",
//       "vercel",
//       "Many More...",
//     ],
//     project_source: [
//       {
//         client_github_link:
//           "https://github.com/yasin-hasan2/LuxeStayRetreat/tree/main/client",
//       },
//       {
//         server_github_link:
//           "https://github.com/yasin-hasan2/LuxeStayRetreat.git",
//       },
//       {
//         live_link: "https://stay-vista-b6877.web.app/",
//       },
//     ],
//   },
//   {
//     id: 2,
//     project_name: "FlavorCrave",
//     category: "Development",
//     description:
//       "A MERN Stack Restaurant website, simplifies Online food buying system. Personalized plans, and . Start today for a better tomorrow. AdminId: Admin02@gmail.com , pass : Admin2@ ",
//     project_thumnail:
//       "https://i.ibb.co.com/Mf6Zr5Q/bangla-restaurant-83eb9-web-app-2.png",
//     images:
//       "https://img.freepik.com/free-vector/northern-lights-landing-page-template_23-2148331593.jpg",
//     technology: ["React", "Tailwinds", "Jwt", "Node", "MongoDB", "ExpressJs"],
//     project_source: [
//       {
//         client_github_link:
//           "https://github.com/yasin-hasan2/bangla-resturent.git",
//       },
//       {
//         server_github_link:
//           "https://github.com/yasin-hasan2/bangla-restaurant-server.git",
//       },
//       {
//         live_link: "https://bangla-restaurant-83eb9.web.app/",
//       },
//     ],
//   },
//   {
//     id: 3,
//     project_name: "PeakFit",
//     category: "Web Design",
//     description:
//       "A MERN Stack Gym center Website, simplifies your fitness journey. Personalized plans, real-time tracking, and community support make achieving your health goals effortless. Start today for a healthier tomorrow. TrainerID: Admin02@gmail.com , pass : Admin02@",
//     project_thumnail:
//       "https://i.ibb.co.com/ZxbDW2N/66ed605d36cd1641a2542987-fitness-tracker-app-by-strong-netlify-app.png",
//     images:
//       "https://img.freepik.com/free-vector/liquid-landing-page-template_52683-23418.jpg",
//     technology: ["React", "Tailwinds", "Jwt", "Node", "MongoDB", "ExpressJs"],
//     project_source: [
//       {
//         client_github_link:
//           "https://github.com/yasin-hasan2/fetnees-tracker.git",
//       },
//       {
//         server_github_link:
//           "https://github.com/yasin-hasan2/fetnees-tracker-server.git",
//       },
//       {
//         live_link: "https://peakfit-fitness-app.netlify.app/",
//       },
//     ],
//   },
//   {
//     id: 4,
//     project_name: "Link Up",
//     category: "UI/UX",
//     description:
//       "A MERN Stack Social media Website Like Facebook or Instagram . Personalized plans, and community support make achieving Joyfully moment. Start today for a new enjoyfull tomorrow. TestingID: Admin02@gmail.com , pass : Admin02@",
//     project_thumnail:
//       "https://i.ibb.co.com/F5WRTmt/link-up-1-netlify-app-i-Phone-12-Pro.png",
//     images:
//       "https://img.freepik.com/premium-vector/abstract-futuristic-gradient-background-with-blue-dynamic-wave-landing-page_830252-101.jpg",
//     technology: ["React", "Tailwinds", "Jwt", "Node", "MongoDB", "ExpressJs"],
//     project_source: [
//       {
//         client_github_link:
//           "https://github.com/yasin-hasan2/Link-Up-client-site.git",
//       },
//       {
//         server_github_link:
//           "https://github.com/yasin-hasan2/Link-Up-server-site.git",
//       },
//       {
//         live_link: "https://link-up-1.netlify.app/",
//       },
//     ],
//   },
// ];
