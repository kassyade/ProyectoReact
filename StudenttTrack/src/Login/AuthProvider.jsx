import React, { createContext, useContext, useState } from 'react';

// 1. Crear un contexto para la autenticación
const AuthContext = createContext();

// 2. Crear el proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado del usuario (null si no está logueado)

  // Función para iniciar sesión
  const login = (userData) => {
    setUser(userData); // Guardar el usuario en el estado
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null); // Eliminar el usuario del estado
  };

  // 3. Proveer el contexto a los componentes hijos
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 4. Crear un hook personalizado para usar el contexto
export const useAuth = () => useContext(AuthContext);