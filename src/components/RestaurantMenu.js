import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [isVegOnly, setIsVegOnly] = useState("");
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams(); // returns the dynamically passed (:resId) parameters during routing
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json?.data);
    console.log(json);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const filteredVeg = isVegOnly
    ? itemCards.filter(
        (item) => item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
      )
    : itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <span>⭐{avgRating}</span>
      <span> - {costForTwoMessage}</span>
      <p>{cuisines.join(",")}</p>
      <h2>Menu</h2>
      <div className="toggle-container">
        <span>Veg Only </span>
        <button
          className={`toggle-btn ${isVegOnly ? "veg" : "both"}`}
          onClick={() => {
            setIsVegOnly(!isVegOnly);
          }}
        >
          {isVegOnly ? "VEG-ONLY" : "BOTH"}
        </button>
      </div>
      <ul>
        {filteredVeg.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
