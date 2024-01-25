import React from "react";

function SalesSection() {
  return (
    <div className="h-96 bg-sky-200 flex flex-row px-20 py-32">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">
          Want to See Our Products in Action?
        </h1>
        <p className="text-2xl text-gray-500">
          If you’re interested in learning more about Boston Dynamics or our
          robots, feel free to explore our resources, and don’t hesitate to
          reach out.
        </p>
      </div>
      <div className="flex-1 relative">
        <div className="absolute top-0 right-0 flex flex-col">
          <button>Contact Sales</button>
          <button>Contact Sales</button>
        </div>
      </div>
    </div>
  );
}

export default SalesSection;
