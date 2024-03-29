import {Button} from "@mui/material"
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function FavoriteButton({giphyImage}){
    const[favorites, setFavorites]=useState({});
    const giphy = useSelector((store) => store.giphy);
    
    function changeFavoriteStatus(image){
        const updatedFavorites = { ...favorites };
        console.log(giphyImage);
    
        // Check if the image is already in favorites
        if (updatedFavorites[image.id]) {
            // If it is remove it from favorites
            console.log('deleting!!!!!');
            console.log(image);
            axios   
                .delete(`/api/favorites/${image.id}`)
                .then((response)=>{
                    console.log("DELETE SUCCESSFUL");
                    delete updatedFavorites[image.id];
                    setFavorites(updatedFavorites)
                })
                .catch((error)=>{
                    console.error("++error deleting favorite++", error);
                });
        } else {
            console.log("adding!!!!!!");
            axios
                .post('/api/favorites', {id: image.id, name: image.alt, url: image.url }) 
                .then((response) => {
                    console.log("POST SUCCESSFUL!!!!!!!!");
                    updatedFavorites[image.id] = true;
                    setFavorites(updatedFavorites);
                })
                .catch((err) => {
                    console.error("Error adding favorite:", err);
                });
    }
  }
    
  const buttonText = favorites[giphyImage.id] ? "Unfavorite" : "Favorite";

  return (
      <>
          <Button variant="contained" size="small" endIcon={favorites[giphyImage.id] ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />} onClick={() => changeFavoriteStatus(giphyImage)}>
              {buttonText}
          </Button>
      </>
  );
}

export default FavoriteButton;