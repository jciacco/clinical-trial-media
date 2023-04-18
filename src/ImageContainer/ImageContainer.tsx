import { useContext, useState, useEffect } from "react";
import { imageContext } from "../context/ImageContext";
import { GoMirror } from "react-icons/go";
import { AiOutlineRotateLeft, AiOutlineRotateRight } from "react-icons/ai";
import styles from "./ImageContainer.module.scss";
import ImageText from "../ImageText/ImageText";
import ImageTextInput from "../ImageTextInput/ImageTextInput";

const ImageContainer = () => {
  const context = useContext(imageContext);
  const { state } = context;
  const [mirrorImage, setMirrorImage] = useState(false);
  const [imageText, setImageText] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("#FFFFFF");
  const [rotationDegree, setRotationDegree] = useState<number>(0);

  const handleRotationClick = (direction: string) => {
    setRotationDegree(
      direction === "left" ? rotationDegree - 90 : rotationDegree + 90
    );
  };

  const iconMap = [
    {
      text: "Mirror",
      icon: <GoMirror />,
      action: () => setMirrorImage(true),
    },
    {
      text: "Rotate Left",
      icon: <AiOutlineRotateLeft />,
      action: () => handleRotationClick("left"),
    },
    {
      text: "Rotate Right",
      icon: <AiOutlineRotateRight />,
      action: () => handleRotationClick("right"),
    },
  ];

  useEffect(() => {
    if (state.image && mirrorImage) {
      setMirrorImage(false);
    }
  }, [state.image]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      {state.image && (
        <>
          <div
            className={`${styles.memeWrapper} ${mirrorImage && styles.mirror}`}
          >
            <div
              className={styles.memeAndTextContainer}
              style={{ transform: `rotate(${rotationDegree}deg)` }}
            >
              <img
                className={`${styles.meme} ${
                  mirrorImage && styles.widthWithMirror
                }`}
                src={state.image}
              />
              <ImageText text={imageText} textColor={textColor} />
            </div>
            {mirrorImage && (
              <div
                className={`${styles.memeAndTextContainer} ${styles.mirror}`}
                style={{
                  transform: ` scaleX(-1) rotate(${rotationDegree}deg)`,
                }}
              >
                <img
                  className={`${styles.meme} ${
                    mirrorImage && styles.widthWithMirror
                  }`}
                  src={state.image}
                />
                <ImageText text={imageText} textColor={textColor} />
              </div>
            )}
          </div>
          <div>
            <ImageTextInput
              setImageText={setImageText}
              setTextColor={setTextColor}
            />
            <div className={styles.actionButtonGroup}>
              {iconMap.map((iconObject, i) => {
                return (
                  <button
                    className={styles.actionButton}
                    key={`iconObject-${i}`}
                    onClick={iconObject.action && iconObject.action}
                  >
                    <div>{iconObject.icon}</div>
                    <div className={styles.actionButtonText}>
                      {iconObject.text}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
      {!state.image && (
        <div className={styles.imagePlaceholder}>
          Your meme creation will appear here..
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
