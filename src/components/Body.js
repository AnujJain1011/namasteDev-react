// not using keys(not acceptable) <<<< using index as key <<<<<<<<<<<<<< using unique id as key(best practice)
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // Local State variable - Superpowerful state variable
  const arr = useState(resList);
  const [listOfRestaurants, setListOfRestauarnts] = arr;

  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (resData) => resData?.info?.avgRating > 4.4
            );
            setListOfRestauarnts(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body; // By default you can export one thing only na like By default my Body file can export Body component only;
