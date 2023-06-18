import { useState } from "react";
const Filter = () => {
  const [roommates, setRoommates] = useState(false);

  const handleRoommatesToggle = () => {
    setRoommates(!roommates);
  };

  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Apartments in Delhi</h1>
        <p className="text-gray-600 mt-2">42 results</p>
      </div>
      <div className="relative flex items-center">
        <label
          htmlFor="roommates-toggle"
          className="flex items-center cursor-pointer"
        >
          <span className="ml-2">Roommates</span>
          <div className="relative flex items-center ml-3">
            <input
              type="checkbox"
              id="roommates-toggle"
              checked={roommates}
              onChange={handleRoommatesToggle}
              className="sr-only"
            />
            <div
              className={`block bg-gray-300 w-10 h-5 rounded-full ${
                roommates ? "bg-blue-500" : ""
              }`}
            ></div>
            <div
              className={`${
                roommates
                  ? "translate-x-6 bg-primary"
                  : "translate-x-0 bg-white"
              } absolute top-0 left-0 block w-5 h-5 rounded-full transition-transform duration-300 ease-in-out transform`}
            ></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Filter;
