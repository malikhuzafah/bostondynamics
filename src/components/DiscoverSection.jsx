import React from "react";

function DiscoverSection() {
  return (
    <div>
      <div className="h-96 flex flex-col items-center justify-around">
        <div className="w-1/2">
          <h1 className="text-6xl text-center font-bold break-words">
            Automated Warehouse Operations
          </h1>
        </div>
        <div className="w-2/3">
          <p className="text-xl text-center text-gray-500">
            Use Stretch's versatile, mobile platform to handle cases and unload
            trailers, making inbound operations more efficient with less
            downtime.
          </p>
        </div>
        <div>
          <button>Discover Strectch</button>
        </div>
      </div>
      <div>
        <div className="flex px-20 py-20">
          <div className="w-1/3 flex flex-col p-16">
            <div className="py-7 border-b-2">
              <h1 className="text-3xl font-bold mb-3">Perception</h1>
              <p>
                Stretch uses an advanced vision system that detects boxes and
                container surroundings.
              </p>
            </div>
            <div className="py-7 border-b-2">
              <h1 className="text-3xl font-bold mb-3">Manipulation</h1>
              <p>
                Stretch is equipped with a purpose-built arm and gripper for
                strength, speed, and reach.
              </p>
            </div>
            <div className="py-7 border-b-2">
              <h1 className="text-3xl font-bold mb-3">Mobility</h1>
              <p>
                Stretch is built to maneuver in and out of trucks and tight
                spaces in a warehouse.
              </p>
            </div>
            <div className="py-7 border-b-2">
              <h1 className="text-3xl font-bold mb-3">Capacity</h1>
              <p>
                Stretch can work two full shifts on a single charge, operating
                effectively without the need to overhaul existing
                infrastructure.
              </p>
            </div>
          </div>
          <div className="w-2/3 flex flex-col gap-10 ">
            <div className="bg-black h-1/2">h</div>
            <div className="bg-black h-1/2">h</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection;
