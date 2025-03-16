// components/ProtectedRoute.js
"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const { auth } = useContext(AuthContext);
  const router = useRouter();

  // Si no el usuario no esta logueado, redirige a login
  useEffect(() => {
    console.log(auth);
    if (auth.initialized && !auth.userId) {
      router.push("/login");
    }
  }, [auth, router]);

  
  if (!auth.accessToken) {
    return <p>Cargando...</p>;
  }

  return children;
}
