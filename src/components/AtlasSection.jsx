import React from "react";

function AtlasSection() {
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src="https://wevolver-project-images.s3.us-west-1.amazonaws.com/0.t7x1cki7f9industrialrobotics.jpg"
          alt=""
        />
        <div className="absolute top-20 right-20 px-28 w-2/4">
          <h1 className="text-6xl font-bold text-white">
            Redefining robotics: Atlas & innovation
          </h1>
          <p className="text-xl text-white font-bold mt-8 w-2/3">
            With innovation at our core, we’re pushing the limits of mobility,
            dexterity, and intelligence with our next generation robots. Step
            into our lab and explore our state-of-the-art hardware and advanced
            control systems with Atlas.
          </p>
          <button className="text-xl font-bold text-white mt-8">
            See Atlas in action
          </button>
        </div>
      </div>
    </div>
  );
}

export default AtlasSection;
