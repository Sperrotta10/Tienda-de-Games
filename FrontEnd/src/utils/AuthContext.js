"use client"; 
import React, { createContext, useState, useEffect } from "react"; 
import { axiosInstance } from '@/utils/axiosInstance';

// Creación del contexto
export const AuthContext = createContext(); // Crea un contexto vacío que usaremos para proveer los datos

// Componente Proveedor que envolverá a toda la aplicación
export function AuthProvider({ children }) { // Recibe los componentes hijos de la app
  
  // 3. Estado inicial de autenticación
  const [auth, setAuth] = useState({ // Estado que almacenará:
    accessToken: null,    // Token de acceso JWT
    refreshToken: null,   // Token de refresco
    userId: null,         // ID del usuario
    user: null            // Datos del usuario
  });

  

  // 4. Efecto para persistencia de sesión
  useEffect(() => { 
    // Función asíncrona interna
    const initializeAuth = async () => {
      const storedAccessToken = localStorage.getItem("accessToken"); 
      const storedRefreshToken = localStorage.getItem("refreshToken"); 
  
      if (storedAccessToken && storedRefreshToken) { 
        try {
          // Verifica el token con el backend
          const response = await axiosInstance.get("/auth");
          const { userId } = response.data.user;
          const response2 = await axiosInstance.get(`/users/${userId}`);
          const userData = response2.data[0];
          console.log(userData);
  
          setAuth(prev => ({ 
            ...prev,
            accessToken: storedAccessToken,
            refreshToken: storedRefreshToken,
            user: userData, 
            userId: userId
          }));
        } catch (error) {
          console.error("Error al validar el token:", error);
          // Limpia el localStorage si el token es inválido
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          setAuth({ accessToken: null, refreshToken: null, user: null, userId: null }); 
        }
      }
    };
  
    initializeAuth(); // <-- Ejecuta la función asíncrona
  }, []); // Array vacío para ejecutar solo al montar

  // Función para iniciar sesión
  const login = (accessToken, refreshToken, userData, userId) => {
    setAuth({ // Actualiza el estado global
      accessToken,
      refreshToken,
      user: userData, // Puede ser un objeto con {id, email, nombre, etc.}
      userId: userId
    });
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("accessToken"); // Elimina del localStorage
    localStorage.removeItem("refreshToken");
    setAuth({ // Resetea el estado
      accessToken: null,
      refreshToken: null,
      user: null,
      userId: null
    });
  };

  const print = () => {
    console.log(auth);
  };

  // 7. Proveedor del contexto
  return (
    <AuthContext.Provider 
      value={{ // Expone estos valores a los componentes hijos
        auth,    // Estado actual de autenticación
        login,    // Función para iniciar sesión
        logout,   // Función para cerrar sesión
        print    
      }}
    >
      {children} {/* Componentes hijos que tendrán acceso al contexto */}
    </AuthContext.Provider>
  );
}