import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import CategoryMenu from "../CategoryMenu/CategoryMenu";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = () => {
    console.log("in fetchFavorites function");

    axios
      .get("/api/favorites")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        setFavorites(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchFavorites();
  }, []);
  return (
    <div>
      <p>This is where the favorites go</p>
      {favorites.map((favorites) => (
        <div key={favorites.id}>
          <CategoryMenu />
          <img src={favorites.url} alt={favorites.name} className="image" />
        </div>
      ))}
    </div>
  );

  // categories are mutually exclusive
}

export default Favorites;
