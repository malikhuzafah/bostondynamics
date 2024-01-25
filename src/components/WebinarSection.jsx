import React from "react";

function WebinarSection() {
  return (
    <div className="px-28 py-20">
      <div className="h-96 bg-sky-200 flex flex-row px-20 py-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            Webinar: Accelerating Digital Transformation ROI
          </h1>
          <p className="text-2xl text-gray-500">
            What if you could realize return on your digital transformation
            investments in 2 years or less? In this webinar we’ll be diving into
            how our end-to-end industrial inspection solution is exceeding ROI
            expectations and share an exclusive sneak peek at what’s new for
            Spot in 2024.
          </p>
        </div>
        <div className="flex-1 relative">
          <div className="absolute top-0 right-0 flex flex-col">
            <button className="text-2xl font-semibold">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebinarSection;
