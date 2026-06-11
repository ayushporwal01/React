import { CDN_URL } from "../utils/constants";

export default function RestaurantCard({ resData }) {
  const { name, avgRating, cuisines, areaName, costForTwo, sla } =
    resData?.info;

  const deliveryTime = sla?.slaString;

  console.log(resData)

  const id = resData?.info?.cloudinaryImageId;

  return (
    <div className="w-full h-full border p-3 rounded-lg">
      <img src={CDN_URL + id} className="w-full h-45 object-cover rounded-xl" alt={name} />
      <div className="pl-2 pt-3">
        <h1 className="w-60 overflow-hidden flex-nowrap truncate text-lg font-semibold">{name}</h1>

        <span className="flex gap-x-1 text-md">
          <span>&#9733;</span>
          <span>{avgRating}</span> &bull;
          <span>{deliveryTime}</span>
        </span>
    
        <p className="w-62 overflow-hidden flex-nowrap truncate text-[#696969]">{cuisines.join(", ")}</p>
        <p className="text-md">{costForTwo}</p>
      </div>
    </div>
  );
}
