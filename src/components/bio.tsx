import React from "react";

const Bio = () => {
  return (
    <section
      id="bio"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-26 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="leading-relaxed text-secondary-text text-base">
        <p className="mb-4">
          I am a Technology Consultant for Microsoft Dynamics 365 software at{" "}
          <a
            href="https://rsmus.com"
            target="_blank"
            className="text-primary-text font-bold whitespace-nowrap hover:text-primary hover:underline hover:decoration-2 underline-offset-2"
          >
            💼 RSM US LLP
          </a>
          , specializing in CRM system implementations. With a degree 
          in Data Science, I bring expertise in 
          {" "}
          <a
            href="#projects"
            className="text-primary-text font-bold whitespace-nowrap hover:text-primary hover:underline hover:decoration-2 underline-offset-2"
          >
            📊 data analysis
          </a>
          , predictive modeling, 
          and machine learning to design and implement tailored CRM solutions that 
          optimize functionality and improve user experiences.
        </p>

        <p className="mb-4">
          In addition to my technical skills, I excel in presenting complex 
          information clearly and have supported project management efforts to ensure 
          the smooth and efficient achievement of milestones.
        </p>

        <p className="mb-4">
          Before transitioning to the technology field, I was a{" "}
          <a
            href="#"
            className="text-primary-text font-bold whitespace-nowrap hover:text-primary hover:underline hover:decoration-2 underline-offset-2"
          >
            ⛸️ competitive figure skater
          </a>
          {" "}and later became a figure skating coach, a role that honed my leadership 
          and mentorship abilities. My diverse background blends technical proficiency 
          with a unique perspective on teamwork, discipline, and adaptability.
        </p>

        <p className="mb-4">
          In my free time, I enjoy{" "}
          <a
            href="#"
            className="text-primary-text font-bold whitespace-nowrap hover:text-primary hover:underline hover:decoration-2 underline-offset-2"
          >
            ✈️ traveling
          </a>
          , exploring new hiking trails, practicing photography, hitting the slopes for 
          some skiing, and spending quality time with friends. I'm passionate about{" "}
          <a
            href="#"
            className="text-primary-text font-bold whitespace-nowrap hover:text-primary hover:underline hover:decoration-2 underline-offset-2"
          >
            💪 staying active
          </a>
          {" "}through various sports and outdoor activities. These pursuits help 
          me maintain a balanced lifestyle and fuel my creativity.
        </p>
      </div>
    </section>
  );
};

export default Bio;