import { useSelector } from "react-redux";

function ImageResult() {
    const giphy = useSelector((store) => store.giphy);

    return (
      <div>
        <h3>IMAGE RESULT</h3>
        <ul>
          {giphy.map((giphyImage) => {
            return (
                <li key={giphyImage.id}>
                <img src={giphyImage.url} alt={giphyImage.alt} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

export default ImageResult;