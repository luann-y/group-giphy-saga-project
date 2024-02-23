import { useSelector } from "react-redux";
import "./ImageResult.css";

function ImageResult() {
    const giphy = useSelector((store) => store.giphy);

    return (
        <div>
        <h3>IMAGE RESULT</h3>
        <div className="image-grid">
            {giphy.map((giphyImage) => {
            return (
                <div key={giphyImage.id} className="image-container">
                <img src={giphyImage.url} alt={giphyImage.alt} className="image"/>
                </div>
            );
        })}
        </div>
        </div>
    );
}

export default ImageResult;