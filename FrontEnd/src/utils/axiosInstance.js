import axios from "axios";


const baseURL = "http://localhost:2004"; // o la URL de tu API

export const axiosInstance = axios.create({
  baseURL,
});

// Interceptor de solicitudes: adjunta el token de acceso
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de respuestas: maneja errores 401 y refresca el token
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Si se recibe un error 401, intenta refrescar el token
    if (error.response && error.response.status === 401) {
      const originalRequest = error.config;
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const { data } = await axiosInstance.post("/auth/refresh", { refreshToken });
          // Guarda el nuevo token de acceso en localStorage
          localStorage.setItem("accessToken", data.accessToken);
          // Actualiza el header Authorization de la solicitud original y reinténtala
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          // Si no se puede refrescar, limpia los tokens y redirige a login
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);
