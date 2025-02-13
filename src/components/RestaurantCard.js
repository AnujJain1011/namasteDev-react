import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo } = resData?.info;
  const { slaString } = resData?.info?.sla;
  return (
    <div className="res-logo">
      <img
        alt="res-logo"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
      ></img>
      <div className="res-details">
        <h4>{name}</h4>
        <span>{avgRating} ⭐,</span>
        <span>{slaString}</span>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
