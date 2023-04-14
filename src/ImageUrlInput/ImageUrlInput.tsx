import * as React from "react";
import { imageContext } from "../context/ImageContext";

const ImageUrlInput = () => {
  const context = React.useContext(imageContext);
  const { dispatch } = context;
  const [inputValue, setInputValue] = React.useState();

  const handleButtonClick = () => {
    dispatch({
      type: "SET_IMAGE",
      image: inputValue
    });
  };
  return (
    <div>
      <input
        placeholder="Enter image url"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handleButtonClick()}>Show that meme</button>
    </div>
  );
};

export default ImageUrlInput;
