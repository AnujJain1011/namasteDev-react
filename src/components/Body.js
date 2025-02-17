// not using keys(not acceptable) <<<< using index as key <<<<<<<<<<<<<< using unique id as key(best practice)
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { DATA_URL } from "../utils/constants";

const Body = () => {
  // Local State variable - Superpowerful state variable
  const arr = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = arr;
  const [listOfRestaurantsDummy, setListOfRestaurantsDummy] = useState([]);

  const [inputText, setInputText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(DATA_URL);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurantsDummy(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // console.log(json);
  };

  // conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <input
          type="text"
          className="input"
          placeholder="search your loved food here..."
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let filteredList2 = listOfRestaurants.filter(
              (resData) =>
                resData?.info?.name
                  .toLowerCase()
                  .includes(inputText.toLowerCase()) ||
                resData?.info?.cuisines
                  .map((cuisine) => {
                    return cuisine.toLowerCase();
                  })
                  .includes(inputText.toLowerCase())
            );
            console.log(listOfRestaurants);
            setListOfRestaurantsDummy(filteredList2);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (resData) => resData?.info?.avgRating > 4.4
            );
            setListOfRestaurantsDummy(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurantsDummy.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body; // By default you can export one thing only na like By default my Body file can export Body component only;

() => {
  return;
};
