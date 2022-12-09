export default function GithubReducer(state, action) {
  switch (action.type) {
    case "CLEAR_USERS":
      return {
        ...state,
        Users: [],
      };
    case "GET_USERS":
      return {
        ...state,
        Users: action.payload,
        Loading: false,
      };
    case "GET_USER":
      return {
        ...state,
        User: action.payload,
        Loading: false,
      };
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        User: action.payload.User,
        Repos: action.payload.Repos,

        Loading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        Repos: action.payload,
        Loading: false,
      };
    case "LOADING":
      return {
        ...state,
        Loading: true,
      };
    default:
      return state;
  }
}
