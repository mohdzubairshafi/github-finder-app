import GithubContext from "./GithubContext";
import React from "react";
import { useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubProvider = ({ children }) => {
  const initialState = {
    Users: [],
    Loading: false,
    User: {},
    Repos: [],
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  return (
    // instead of passing each stat we spread them
    // and instead of sending function we send only dispatch
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {" "}
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
