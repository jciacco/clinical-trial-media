import styles from "./ImageText.module.scss";

interface ImageTextProps {
  text: string;
  textColor: string;
}

const ImageText = (props: ImageTextProps) => {
  const { text, textColor } = props;
  return (
    <div className={styles.memeText} style={{ color: `${textColor}` }}>
      {text}
    </div>
  );
};

export default ImageText;
