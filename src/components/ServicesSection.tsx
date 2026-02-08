import React from 'react';

// Define type langsung di sini
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="bg-white dark:bg-[#1a120b] py-16 px-6 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-[#f4ede7] dark:border-[#3d2e1f] hover:border-primary/50 transition-colors group cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold dark:text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#9c7349] dark:text-[#a38a73]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;