import http from "./http";

const apiEndPoint = "/api/users";
const tokenKey = "token";

export const signup = async (user) => {
  const { token, success, message } = await http.post(apiEndPoint, user);
  if (success && process.browser) localStorage.setItem(tokenKey, token);

  return { success, message };
};

export const editProfile = async (user) => {
  const { token, success, message } = await http.put(apiEndPoint, user);
  if (success && process.browser) localStorage.setItem(tokenKey, token);

  return { success, message };
};

export const deleteProfile = async () => {
  const { success, message } = await http.remove(apiEndPoint);
  if (success && process.browser) localStorage.removeItem(tokenKey);

  return { success, message };
};
