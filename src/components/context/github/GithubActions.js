import axios from "axios";
const Github_Url = process.env.REACT_APP_GITHUB_API_URL;
const Github_Token = process.env.REACT_APP_GITHUB_API_TOKEN;

const github = axios.create({
  baseURL: Github_Url,
  headers: { Authorization: `token ${Github_Token}` },
});

//search for users
export const searchAPI = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${params}`);
  if (response.status === 404 || response.data.items.length === 0) {
    window.location = "/notfound";
  } else {
    return response.data.items;
  }
};

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};
