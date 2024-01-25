import React from "react";

const urls = [
  "https://bostondynamics.com/wp-content/uploads/2023/04/DHL_logo_rgb_BG.png",
  "https://www.bostondynamics.com/wp-content/uploads/2023/05/bp-logo.webp",
  "https://www.bostondynamics.com/wp-content/uploads/2023/05/national-grid.webp",
  "https://bostondynamics.com/wp-content/uploads/2023/04/gfs-logo.png",
  "https://www.bostondynamics.com/wp-content/uploads/2023/04/turner_construction_small.png",
  "https://www.bostondynamics.com/wp-content/uploads/2023/05/wood-side.webp",
  "https://bostondynamics.com/wp-content/uploads/2023/12/Maersk_Logo-300x78.png",
  "https://bostondynamics.com/wp-content/uploads/2023/04/COEMain_vertical_RGB.png",
];

function SpotHomeSection() {
  return (
    <div className="px-28 pt-28 mb-28">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">
          Trusted by industry-leading organizations around the world
        </h1>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex flex-row h-24 w-4/5">
          {urls.map((url, index) => (
            <div key={index} className="w-full h-full p-4">
              <img
                src={url}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="w-3/4 mt-12">
          <h1 className="text-7xl font-bold">
            Your teammate, your tool. Meet Spot.
          </h1>
        </div>
        <div className="w-1/4 mt-12 text-gray-600">
          <p className="text-2xl leading-8">
            Our agile, mobile robot will redefine your day-to-day. It works
            anywhere you work, gathering data, keeping people out of harm’s way,
            and exploring without boundaries.
          </p>
          <button className="text-xl font-bold mt-12">Learn About Spot</button>
        </div>
      </div>
    </div>
  );
}

export default SpotHomeSection;
