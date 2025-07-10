"use client";
import axios from "axios";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import style from "../../Styles/login/login.module.css";
import Link from "next/link";
import { AuthContext } from "../../utils/AuthContext";
import { axiosInstance } from "@/utils/axiosInstance";
import AlreadyLogged from "@/utils/AlreadyLogged";
export default function LoginPage() {
  const { login, print, auth } = useContext(AuthContext);
  const [error, setError] = useState("");
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2004/auth/login",
        credentials
      );
      const { accessToken, refreshToken } = response.data;

      // Guardar los tokens en localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // Obtener el id
      const response2 = await axiosInstance.get("/auth");
      const { userId } = response2.data.user;

      // Obtener los datos del usuario
      const response3 = await axiosInstance.get(`/users/${userId}`);
      const userData = response3.data[0];

      // Actualizar el estado de autenticación
      login(accessToken, refreshToken, userData, userId);
      /* print(); */
      router.push("/");
    } catch (error) {
      /* print(); */
      console.error("Error en el login:", error);
      setError("Credenciales incorrectas");
    }
  };

  return (
    <AlreadyLogged>
      <div className={style["login-container"]}>
        <form className={style["login-form"]} onSubmit={handleSubmit}>
          <h1 className={style["login-title"]}>Bienvenido!</h1>
          <input
            className={style["login-input"]}
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
          />
          <input
            className={style["login-input"]}
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />
          {error && <p className={style["login-error"]}>{error}</p>}
          <button className={style["login-button"]}>Login</button>

          <span>
            <Link className={style["login-link"]} href="/register">
              ¿No tienes cuenta? Registrate
            </Link>
          </span>
        </form>
      </div>
    </AlreadyLogged>
  );
}
