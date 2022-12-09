import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const Github = axios.create({ baseURL: GITHUB_URL });

export const GetUsers = async (value) => {
  const param = new URLSearchParams({
    q: value,
  });
  // const response = await fetch(`${GITHUB_URL}/search/users?${param}`);
  // const data = await response.json();
  const response = await Github.get(`/search/users?${param}`);

  return response.data;
};

export const GetUserAndRepo = async (login) => {
  const param = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const [user, repos] = await Promise.all([
    Github.get(`/users/${login}`),
    Github.get(`/users/${login}/repos?${param}`),
  ]);
  return { User: user.data, Repos: repos.data };
};

// function to get single user
export const GetUser = async (login) => {
  // const response = await fetch(`${GITHUB_URL}/users/${login}`);
  const response = await Github.get(`/users/${login}`);
  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    // const data = await response.json();
    return response.data;
  }
};
// to get user repos
export const GetRepos = async (login) => {
  const param = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  // const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${param}`);
  const response = await Github.get(`/users/${login}/repos?${param}`);

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    // const data = await response.json();
    return response.data;
  }
};
