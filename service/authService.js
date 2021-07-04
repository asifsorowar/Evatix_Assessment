import http from "./http";
import jwt from "jsonwebtoken";

const tokenKey = "token";
http.setJwt(getJwt());

export async function login(user) {
  const { token, success, message } = await http.post("/api/auth", user);
  if (success && process.browser) localStorage.setItem(tokenKey, token);

  return { success, message };
}

export async function logout() {
  if (process.browser) localStorage.removeItem(tokenKey);
}

export function getUser() {
  try {
    if (process.browser) {
      const token = localStorage.getItem(tokenKey);
      return jwt.decode(token);
    }
  } catch (error) {
    return null;
  }
}

export async function getUserFromServer() {
  try {
    if (process.browser) {
      const { data, success } = await http.get("/api/users");
      return { data, success };
    }
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  if (process.browser) return localStorage.getItem(tokenKey);
}
