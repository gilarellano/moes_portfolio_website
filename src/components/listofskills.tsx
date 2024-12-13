import React from "react";

interface SkillCategory {
  title: string;
  skills: {
    subtitle: string;
    items: string[];
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Coding and Data Science",
    skills: [
      {
        subtitle: "Languages/Tools",
        items: ["Python", "JavaScript", "TensorFlow/Keras", "Pandas", "Matplotlib"]
      },
      {
        subtitle: "Expertise",
        items: [
          "Data visualization",
          "Data cleanup",
          "Data analysis",
          "Supervised machine learning",
          "Unsupervised machine learning"
        ]
      },
      {
        subtitle: "Other Tools",
        items: ["Advanced Excel", "XRM Toolbox"]
      }
    ]
  },
  {
    title: "Microsoft Dynamics Software",
    skills: [
      {
        subtitle: "Modules",
        items: [
          "Power Pages (Portals)",
          "Customer Service",
          "Sales",
          "Field Service",
          "Marketing",
          "Power BI",
          "Power Platform",
          "Project Operations"
        ]
      },
      {
        subtitle: "Certifications",
        items: [
          "PL900: Microsoft Power Platform Fundamentals",
          "PL100: Microsoft Power Platform App Maker",
          "MB210: Microsoft Dynamics 365 Functional Consultant (Sales)"
        ]
      }
    ]
  }
];

const ListOfSkills: React.FC = () => {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Technical Skills
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="group relative rounded-md transition-all"
          >
            <h3 className="text-primary-text text-xl lg:text-lg font-bold mb-4">
              {category.title}
            </h3>
            <div className="flex flex-col gap-6">
              {category.skills.map((skillSet, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="bg-card p-4 rounded-custom shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg"
                >
                  <h4 className="text-primary-text text-base lg:text-sm font-medium mb-3">
                    {skillSet.subtitle}
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {skillSet.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="bg-tag px-3 py-1 rounded-full text-primary text-sm lg:text-xs font-light"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListOfSkills;