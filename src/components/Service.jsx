import React from 'react';
import { RiCodeSSlashLine, RiAiLine, RiApiLine, RiPaletteLine, RiLightbulbLine } from 'react-icons/ri';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and performant web applications",
      icon: RiCodeSSlashLine,
    },
    {
      title: "AI Integration",
      description: "Incorporating AI technologies into your projects",
      icon: RiAiLine,
    },
    {
      title: "API Development & Integration",
      description: "Building and integrating robust APIs",
      icon: RiApiLine,
    },
    {
      title: "UI/UX Enhancement",
      description: "Improving user interfaces and experiences",
      icon: RiPaletteLine,
    },
    {
      title: "Technical Consulting",
      description: "Providing expert advice on technical solutions",
      icon: RiLightbulbLine,
    },
  ];

  return (
    <div className=" bg-[#020817] py-20 ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Services I Provide
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Explore the range of services I offer to help bring your digital projects to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
            //   const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-gray-800/50"
                >
                  <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="mb-4">
                    {/* <Icon className="w-8 h-8 text-blue-500" /> */}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

