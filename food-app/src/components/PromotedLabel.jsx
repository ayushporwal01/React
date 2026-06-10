import React from "react";
import RestaurantCard from "./RestaurantCard";

const PromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default PromotedLabel;
