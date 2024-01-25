import React from "react";

function ExploreSection() {
  return (
    <div className="">
      <div className="relative">
        <img
          src="https://wevolver-project-images.s3.us-west-1.amazonaws.com/0.t7x1cki7f9industrialrobotics.jpg"
          alt=""
        />
        <div
          className="absolute top-32 px-28 w-4/5"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <h1 className="text-7xl font-bold text-white">
            Changing your idea of what robots can do.
          </h1>
          <p className="text-2xl font-bold mt-14 w-2/3 text-white">
            Discover practical robotics solutions designed to tackle today's—and
            tomorrow's—toughest automation challenges.
          </p>
          <button className="text-2xl font-bold mt-14 text-white">
            Explore Solutions
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;
