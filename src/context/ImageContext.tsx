import React, { createContext, useReducer } from "react";

type InitialStateType = {
  image: string;
};
const initialState = {
  image: "",
};

const imageContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});
const { Provider } = imageContext;

const ImageProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(
    (prevState: InitialStateType, action: any) => {
      switch (action.type) {
        case "SET_IMAGE":
          return {
            ...prevState,
            image: action.image,
          };
        default:
          throw new Error();
      }
    },
    initialState
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { imageContext, ImageProvider };
