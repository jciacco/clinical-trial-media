import * as React from "react";

interface ImageTextInputProps {
  setImageText: React.Dispatch<React.SetStateAction<string>>;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
}

const ImageTextInput = (props: ImageTextInputProps) => {
  const [text, setText] = React.useState<string>("");
  const { setImageText, setTextColor } = props;
  const hexCodes = ["#FFFFFF", "#808080", "#000000", "#FF0000", "#00FF00"];

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setImageText(text)}>ADD TEXT</button>
      <div>
        {hexCodes.map((hexCode) => {
          return (
            <button
              style={{
                backgroundColor: `${hexCode}`,
                height: 30,
                width: 30,
                outline: "none",
                border: `2px solid black`,
                borderRadius: 3,
                margin: "10px 5px",
              }}
              onClick={() => setTextColor(hexCode)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageTextInput;
