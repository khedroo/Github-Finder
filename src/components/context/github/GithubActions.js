import axios from "axios";
const Github_Url = 'https://api.github.com';
const Github_Token = "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";

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

 
    return response.data.items;

};

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};
