import React, { useState } from "react";
import { useGlobalContext } from "../context/AppContext";

function TourItem({ item }) {
  const { removeTour } = useGlobalContext();
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="container sm:max-w-4xl mb-8">
      <div className="w-full">
        <img
          src={item.image}
          alt={item.name}
          className="rounded w-full max-h-[584px]"
        />
      </div>
      <div className="bg-white p-5 rounded-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-semibold">{item.name}</h2>
          <p className="text-lg sm:text-xl py-1 px-4 bg-gray-800 text-white rounded">
            {item.price}
          </p>
        </div>
        <div className="my-4">
          <p className="text-base sm:text-lg">
            {showInfo ? item.info : item.info.substring(0, 200)}{" "}
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="text-blue-500"
            >
              {showInfo ? "Show less" : "Show more"}
            </button>
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={() => removeTour(item.id)}
            className="inline-block text-lg sm:text-xl text-blue-500 py-1 px-4 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors"
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default TourItem;
