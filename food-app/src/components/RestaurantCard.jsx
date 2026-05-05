import { CDN_URL } from "../utils/constants";

export default function RestaurantCard({ resData }) {
  const { name, avgRating, cuisines, areaName, costForTwo, sla } =
    resData?.info;

  const deliveryTime = sla?.slaString;

  const id = resData?.info?.cloudinaryImageId;

  return (
    <div className="w-full h-full border p-3 transform scale-100 hover:scale-95 ease-in-out duration-100">
      <img src={CDN_URL + id} className="w-full h-45 object-cover rounded-xl" alt={name} />
      <div className="pl-2 pt-3">
        <h1 className="w-70 overflow-hidden flex-nowrap truncate text-lg font-semibold">{name}</h1>

        <span className="flex gap-x-1 text-md">
          <span>&#9733;</span>
          <span>{avgRating}</span> &bull;
          <span>{deliveryTime}</span>
        </span>

        <p className="w-70 overflow-hidden flex-nowrap truncate text-[#696969]">{cuisines.join(", ")}</p>
        <p className="text-md">{costForTwo}</p>
      </div>
    </div>
  );
}
