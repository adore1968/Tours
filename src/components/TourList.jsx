import React from "react";
import { useGlobalContext } from "../context/AppContext";
import TourItem from "./TourItem";

function TourList() {
  const { tours } = useGlobalContext();
  return (
    <div className="mt-12">
      {tours.map((item) => {
        return <TourItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default TourList;
