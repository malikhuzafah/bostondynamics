import React from "react";

function StrechSection() {
  return (
    <div
      className="h-128 bg-cyan-950"
      style={{
        marginTop: "100px",
        backgroundColor: "#000000",
      }}
    >
      <div className="px-28" style={{}}>
        <div className="w-2/3 relative">
          <img
            src="https://bostondynamics.com/wp-content/uploads/2023/04/spot-with-spot-cam-ir.jpg"
            alt=""
            className="absolute"
            style={{ top: "-400px", right: "-400px" }}
          />
        </div>

        <div>
          <div className="relative">
            <img
              src="https://bostondynamics.com/wp-content/uploads/2023/07/stretch-trailer-with-boxes-conveyor.jpg"
              alt=""
              className="w-2/5 absolute"
              style={{ top: "350px" }}
            />
            <div
              className="w-2/5 absolute h-full"
              style={{ top: "350px", right: "150px" }}
            >
              <h1 className="text-7xl text-white font-bold">
                The Future of Warehouse Automation
              </h1>
              <p className="text-xl text-white mt-10">
                Use Stretch to streamline case handling and trailer unloading
                operations. Easy to deploy and flexible, Stretch keeps your
                operations moving.
              </p>
              <button className="text-xl text-white mt-10">
                Learn About Stretch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrechSection;
