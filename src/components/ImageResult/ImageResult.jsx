import { useSelector } from "react-redux";
import "./ImageResult.css";
import FavoriteButton from "./FavoriteButton/FavoriteButton";


function ImageResult() {
  const giphy=useSelector((store)=>store.giphy);

    return (
        <div>
        <h3>IMAGE RESULT</h3>
        <div className="image-grid">
            {giphy.map((giphyImage) => {
            return (
                <div key={giphyImage.id} className="image-container">
                   <FavoriteButton></FavoriteButton>
                <img src={giphyImage.url} alt={giphyImage.alt} className="image"/>
                
                </div>
            );
        })}
        </div>
        </div>
    );
}

export default ImageResult;