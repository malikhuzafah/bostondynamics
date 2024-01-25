import React from "react";

function FeaturedSection() {
  return (
    <div className="px-28 py-20">
      <div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-5xl font-bold">Featured resourses</h1>
          <button className="text-2xl">View All Resources</button>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-8 mt-20">
        <div className="flex flex-col gap-8">
          <div className=" w-96">
            <img
              src="https://bostondynamics.com/wp-content/uploads/2023/06/spot-levels-up-5x4-1.jpg"
              alt=""
              className=""
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              The Missing Link in Your Digital Transformation
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-96">
            <img
              src="https://bostondynamics.com/wp-content/uploads/2023/05/stretch-vision-still-e1687873455378.jpg"
              alt=""
              className=""
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              The Missing Link in Your Digital Transformation
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className=" w-96">
            <img
              src="https://bostondynamics.com/wp-content/uploads/2023/06/spot-levels-up-5x4-1.jpg"
              alt=""
              className=""
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              The Missing Link in Your Digital Transformation
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection;
