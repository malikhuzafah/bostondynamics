import React from "react";

function SpotSection() {
  return (
    <div className="py-20 px-28">
      <div className=" bg-cyan-950  flex flex-row">
        <div className="w-1/2">
          <img
            src="src\assets\images\spot-section.png"
            alt="robot"
            className=""
          />
        </div>
        <div className="p-24 flex flex-col justify-center gap-8">
          <h1 className="text-white text-4xl font-bold">
            Start building tomorrow’s solutions today.
          </h1>
          <p className="text-white text-xl">
            Have a question about our robots? Reach out to our team.
          </p>
          <button className="text-white text-xl">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default SpotSection;
