import React from "react";
import RestaurantCard from "./RestaurantCard";

const PromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="transform scale-100 hover:scale-95 ease-in-out duration-100">
        <label className="bg-black text-white px-3 py-1.5 rounded-sm z-10 absolute">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default PromotedLabel;
