import React from "react";
import Award from "./Award";

function SolutionsSections() {
  return (
    <div className="px-28 py-20">
      <div>
        <div className="flex flex-col gap-8 w-2/3">
          <h1 className="text-6xl font-bold">Solutions for the real world</h1>
          <p className="text-2xl">
            Give your team the tools to make work better: find solutions to keep
            your operations productive and keep your people safe.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 mt-20">
        <Award
          img={
            "https://bostondynamics.com/wp-content/uploads/2023/05/grid1-768x437.webp"
          }
          title="Inspection"
        />
        <Award
          img={
            "https://bostondynamics.com/wp-content/uploads/2023/05/grid1-768x437.webp"
          }
          title="Inspection"
        />
        <Award
          img={
            "https://bostondynamics.com/wp-content/uploads/2023/05/grid1-768x437.webp"
          }
          title="Inspection"
        />
        <Award
          img={
            "https://bostondynamics.com/wp-content/uploads/2023/05/grid1-768x437.webp"
          }
          title="Inspection"
        />
        <Award
          img={
            "https://bostondynamics.com/wp-content/uploads/2023/05/grid1-768x437.webp"
          }
          title="Inspection"
        />
        <Award
          img={
            "https://bostondynamics.com/wp-content/uploads/2023/05/grid1-768x437.webp"
          }
          title="Inspection"
        />
      </div>
    </div>
  );
}

export default SolutionsSections;
