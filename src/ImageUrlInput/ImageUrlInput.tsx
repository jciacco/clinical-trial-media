import * as React from "react";
import { imageContext } from "../context/ImageContext";
import styles from "./ImageUrlInput.module.scss";

const ImageUrlInput = () => {
  const context = React.useContext(imageContext);
  const { state, dispatch } = context;
  const [inputValue, setInputValue] = React.useState<string>();

  const handleButtonClick = () => {
    if (inputValue !== state.image) {
      dispatch({
        type: "SET_IMAGE",
        image: inputValue,
      });
    }
  };
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.imageInput}
        placeholder="Enter image url"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className={styles.inputButton}
        onClick={() => handleButtonClick()}
      >
        Show that meme
      </button>
    </div>
  );
};

export default ImageUrlInput;
