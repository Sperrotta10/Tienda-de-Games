"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/navigation";

export default function AlreadyLogged({ children }) {
  const { auth } = useContext(AuthContext);
  const router = useRouter();

  // Cuando se haya inicializado el estado de autenticación y el usuario esté logueado, redirige a la página de inicio.
  useEffect(() => {
    console.log(auth);
    if (auth.initialized && auth.userId) {
      router.push("/");
    }
  }, [auth, router]);

  // Mientras no se haya inicializado la autenticación, mostramos un mensaje de carga
  if (!auth.initialized || auth.userId) {
    return <p>Cargando...</p>;
  }

  // Si la autenticación está inicializada y el usuario NO está logueado, renderizamos los componentes hijos (por ejemplo, la vista de login)
  return children;
}
