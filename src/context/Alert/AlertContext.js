import { createContext, useContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const empty = () => {
    dispatch({
      type: "ERROR",
    });
    setTimeout(() => {
      dispatch({
        type: "REMOVE",
      });
    }, 3000);
  };

  return <AlertContext.Provider value={{ alert: state, empty }}>{children}</AlertContext.Provider>;
};
export default AlertContext;
