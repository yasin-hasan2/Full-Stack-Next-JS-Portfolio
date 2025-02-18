export const metadata = {
  title: "About",
  description: "About Page",
};

export default function About() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Done", value: "100+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Awards", value: "10+" },
  ];

  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and dynamic websites",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces",
    },
    {
      title: "Mobile Development",
      description: "Building cross-platform mobile apps",
    },
  ];

  return (
    <div className="p-8 md:p-12 bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
        <div data-aos="fade-right">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Who am I?</h2>
          <p className="text-gray-600 mb-4">
            I'm a passionate developer and designer with a keen eye for detail
            and a love for creating beautiful, functional digital experiences.
          </p>
          <p className="text-gray-600">
            With over 5 years of experience in the industry, I've worked with
            various technologies and frameworks to deliver high-quality
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6" data-aos="fade-left">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md"
            >
              <div className="text-2xl md:text-3xl font-bold text-orange-500">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold mb-6" data-aos="fade-up">
        What I Do?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
