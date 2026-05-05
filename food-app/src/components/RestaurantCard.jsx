import { CDN_URL } from "../utils/constants";

export default function RestaurantCard({ resData }) {
  const { name, avgRating, cuisines, areaName, costForTwo, sla } = resData?.info;

  const deliveryTime = sla?.slaString;

  const id = resData?.info?.cloudinaryImageId;

  return (
    <div className="">
      <div className="">
        <img src={CDN_URL + id} alt={name} />
      </div>
      <div className="">
        <h1 className="">{name}</h1>

        <span className="">
          <span className="">&#9733;</span>
          <span className="">{avgRating}</span> &bull;
          <span className="">{deliveryTime}</span>
        </span>

        <div className="">
          <p className="">{cuisines.join(", ")}</p>
          <p className="">{costForTwo}</p>
        </div>
      </div>
    </div>
  );
}
