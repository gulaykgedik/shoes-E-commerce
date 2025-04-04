import axios from "axios";
import { AuthResponse } from "../types";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    console.log("arayazılım hatası yakalandı");

    const originalReq = err.config;

    if (
      err.response.status === 401 &&
      !originalReq._retry &&
      err.response.data.message === "Access token expired"
    ) {
      originalReq._retry = true;

      try {
        const res = await api.post<AuthResponse>("/auth/refresh");
        console.log("access tokenı yeniledi", res);

        return api(originalReq);
      } catch (err) {
        console.log("access tokenı yenileme hatası", err);

        await api.post("/auth/logout");

        window.location.href = "/login";

        return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  }
);

export default api;
