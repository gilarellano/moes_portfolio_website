import React from "react";

interface Experience {
  href: string;
  period: string;
  role: string;
  company: string;
  description: string;
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    href: "#",
    period: "2024",
    role: "Sales Software Implementation",
    company: "Healthcare Company",
    description:
      "Designed and implemented a tailored sales solution to streamline operations and improve user adoption, leading to enhanced business processes and efficiency.",
    technologies: ["Dynamics 365", "Power Platform", "Sales Hub"],
  },
  {
    href: "#",
    period: "2024",
    role: "Power Pages (Portal) Implementation",
    company: "Healthcare Company",
    description:
      "Developed and deployed a custom portal to enhance interactions and improve accessibility for healthcare services.",
    technologies: ["Power Pages", "Power Platform", "Azure", "JavaScript", "HTML"],
  },
  {
    href: "#",
    period: "2024",
    role: "Project Operations Implementation",
    company: "Healthcare Company",
    description:
      "Co-designed project operations tools to optimize resource management and streamline project tracking.",
    technologies: ["Project Operations", "Dynamics 365"],
  },
  {
    href: "#",
    period: "2024",
    role: "Sales Software Implementation",
    company: "Food & Beverage Company",
    description:
      "Implemented a sales software solution to enhance customer relationship management and provide actionable insights for the sales team.",
    technologies: ["Dynamics 365", "Power BI", "Sales Hub"],
  },
  {
    href: "#",
    period: "2023",
    role: "Customer Service Implementation",
    company: "Bio-Chemical Company",
    description:
      "Built a custom CRM solution to enhance customer service workflows and improve responsiveness to client inquiries.",
    technologies: ["Customer Service Hub", "Power Apps"],
  },
  {
    href: "#",
    period: "2023",
    role: "Power Pages (Portal) Implementation",
    company: "Government Project",
    description:
      "Built a secure and user-friendly portal for government operations, focusing on accessibility and efficiency for public services.",
    technologies: ["Power Pages", "Azure AD", "Power Platform", "JavaScript", "HTML"],
  },
];

const ListOfExperiences: React.FC = () => {
  return (
    <section
      id="experiences"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-16 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>

      <ol className="group/list flex flex-col" role="list">
        {experiences.map((experience, index) => (
          <li
            key={index}
            className="group relative mb-10 rounded-md transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="cursor-pointer">
              <div className="absolute -inset-x-6 -inset-y-4 z-0 hidden lg:block rounded-md motion-reduce:transition-none group-hover:bg-card group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg"></div>
              <div className="relative z-10 flex flex-col gap-y-2 lg:flex-row lg:gap-x-4">
                <p className="pt-0.5 lg:w-[86px] shrink-0 text-secondary-text font-light text-sm lg:text-xs">
                  {experience.period}
                </p>
                <div className="flex flex-col">
                  <div className="flex flex-col pb-2">
                    <div className="pb-2">
                      <h3 className="text-primary-text text-2xl lg:text-lg font-bold lg:group-hover:text-primary">
                        {experience.role}
                      </h3>
                      <h4 className="text-secondary-text text-sm lg:text-sm font-bold">
                        {experience.company}
                      </h4>
                    </div>
                    <p className="text-secondary-text text-sm lg:text-sm">
                      {experience.description}
                    </p>
                  </div>
                  {experience.technologies && (
                    <ul className="flex flex-wrap pt-2 gap-3 text-primary text-sm lg:text-xs font-extralight *:rounded-full *:bg-tag *:px-3 *:py-1">
                      {experience.technologies.map((tech, techIndex) => (
                        <li key={techIndex}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ListOfExperiences;