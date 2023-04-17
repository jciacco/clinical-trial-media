import { useContext } from "react";
import ImageUrlInput from "./ImageUrlInput/ImageUrlInput";
import email from "./Icon-Email.svg";
import { imageContext } from "./context/ImageContext";
import styles from "./styles.module.scss";
import ImageContainer from "./ImageContainer/ImageContainer";

export default function App() {
  const context = useContext(imageContext);
  const { state } = context;
  return (
    <div className={styles.App}>
      <ImageUrlInput />
      <div className={styles.imageWrapper}>
        <ImageContainer />
      </div>
    </div>
  );
}
