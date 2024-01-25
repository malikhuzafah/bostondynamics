import React from "react";

const Award = ({ title, desc, img, link, year }) => {
  return (
    <div className="flex flex-col gap-6 mb-10">
      <div
        style={{
          height: "200px",
          width: "400px",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-xl font-semibold">Learn More</p>
    </div>
  );
};

export default Award;
