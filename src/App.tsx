import { useContext } from "react";
import ImageUrlInput from "./ImageUrlInput/ImageUrlInput";
import email from "./Icon-Email.svg";
import { imageContext } from "./context/ImageContext";
import "./styles.css";

export default function App() {
  const context = useContext(imageContext);
  const { state } = context;
  return (
    <div className="App">
      <ImageUrlInput />
      {/* <img src={email} /> */}
      <div>
        {state.image && <img src={state.image} />}
        <div>Hello CodeSandbox</div>
      </div>
    </div>
  );
}
