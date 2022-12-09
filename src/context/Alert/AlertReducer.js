import React from "react";

export default function AlertReducer(state, action) {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        message: "Please Write Something!!! ",
        error: true,
      };
    case "REMOVE":
      return null;
    default:
      return { ...state, error: false };
  }
}
