const baseUrl = process.env.NODE_ENV
  ? "http://localhost:3000"
  : "http://yourwebsite.com";

let token = "";
const setJwt = (jwt) => {
  token = jwt;
};

const get = async (api) => {
  const res = await fetch(`${baseUrl}${api}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });
  return res.json();
};

const post = async (api, body) => {
  const res = await fetch(`${baseUrl}${api}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

const put = async (api, body) => {
  const res = await fetch(`${baseUrl}${api}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify(body),
  });

  return res.json();
};

const remove = async (api) => {
  const res = await fetch(`${baseUrl}${api}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });
  return res.json();
};

export default {
  get,
  post,
  put,
  remove,
  setJwt,
};
