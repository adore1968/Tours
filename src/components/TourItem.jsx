import React, { useState } from "react";
import { useGlobalContext } from "../context/AppContext";

function TourItem({ item }) {
  const { removeTour } = useGlobalContext();
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div>
        <img src={item.image} alt={item.name} />
      </div>
      <div>
        <div>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </div>
        <div>
          <p>
            {showInfo ? item.info : item.info.substring(0, 200)}{" "}
            <button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? "Show less" : "Show more"}
            </button>
          </p>
        </div>
        <div>
          <button onClick={() => removeTour(item.id)}>Not Interested</button>
        </div>
      </div>
    </div>
  );
}

export default TourItem;
