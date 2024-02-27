import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import "./Favorites.css";
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
    <div className="image-grid">
      {favorites.map((favorites) => (
        <div>
          <CategoryMenu />
          <div key={favorites.id} className="image-container">
            <img src={favorites.url} alt={favorites.name} className="image" />
          </div>
        </div>
      ))}
    </div>
  );

  // categories are mutually exclusive
}

export default Favorites;
