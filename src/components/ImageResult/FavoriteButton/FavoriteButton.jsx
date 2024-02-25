import {Button} from "@mui/material"
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function FavoriteButton(){
    const[favorites, setFavorites]=useState({});
    const giphy = useSelector((store) => store.giphy);
    
    function changeFavoriteStatus(id){
        console.log(id);
        const updatedFavorites = { ...favorites };
    
        // Check if the image is already in favorites
        if (updatedFavorites[id]) {
            // If it is remove it from favorites
            console.log('deleting!!!!!');
            axios   .delete(`/api/favorites/${id}`)
            .then((response)=>{
                console.log("DELETE SUCCESSFUL");
            })
            delete updatedFavorites[id];
        } else {
            // If it's not add it to favorites
            console.log("adding!!!!!!");
            updatedFavorites[id] = true;
        }
        setFavorites(updatedFavorites)
    }

    return(
        <>
         <Button onClick={changeFavoriteStatus}>Favorite</Button>
        </>
    );
}

export default FavoriteButton;