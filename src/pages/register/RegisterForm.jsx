import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services";
import { message } from "antd"

export function RegisterForm() {
  
  const [isLoading, setIsLoading] = useState(false)
  const nav = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [key]: value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerData = {
      name: data.name,
      email: data.email,
      password: data.password,
    }

    try {
      if (
        data.email === "" ||
        data.password === "" ||
        data.confirmPassword === "" ||
        data.name === ""
      ) {
        message.info("Faltan datos.");
        return;
      }
      setIsLoading(true)

      if (data.password !== data.confirmPassword) {
        message.error("Las contraseñas no coinciden.");
        return;
      }
      const response = await register(registerData);

      nav("/login");
      message.success("Usuario registrado correctamente!");
    } catch (error) {
      if (error.status === 404) {
        return message.error("El mail ya se encuentra registrado!");
      }
      message.error("Error al crear usuario, intentalo mas tarde!");
      console.log("Error status", error.status);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <form className="max-w-lg w-full mr-auto ml-auto"onSubmit={handleSubmit}>
      <div className="bg-gray-500 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-10">
          <h2 className="text-center text-3xl font-bold text-black">
            Register
          </h2>
          <p className="mt-4 text-center text-black">Crea o conecta una nueva cuenta</p>
          <input
            className="mt-4 rounded-md shadow-sm relative block w-full px-3 py-3 border border-gray-600 bg-gray-600 text-white focus:outline-none focus:ring-gray-700 focus:border-gray-800 focus:z-10 sm:text-sm"
            placeholder="nombre de usuario"
            type="text"
            onChange={handleInputChange}
            name="name"
            value={data.name}
          />
          <input
            className="mt-4 rounded-md shadow-sm relative block w-full px-3 py-3 border border-gray-600 bg-gray-600 text-white focus:outline-none focus:ring-gray-700 focus:border-gray-800 focus:z-10 sm:text-sm"
            placeholder="mitienda@ejemplo.com"
            type="text"
            onChange={handleInputChange}
            name="email"
            value={data.email}
          />
          <input
            className="mt-4 rounded-md shadow-sm relative block w-full px-3 py-3 border border-gray-600 bg-gray-600 text-white focus:outline-none focus:ring-gray-700 focus:border-gray-800 focus:z-10 sm:text-sm"
            placeholder="contraseña"
            type="password"
            onChange={handleInputChange}
            name="password"
            value={data.password}
          />
          <input
            className="mt-4 rounded-md shadow-sm relative block w-full px-3 py-3 border border-gray-600 bg-gray-600 text-white focus:outline-none focus:ring-gray-700 focus:border-gray-800 focus:z-10 sm:text-sm"
            placeholder="confirmar contraseña"
            type="password"
            onChange={handleInputChange}
            name="confirmPassword"
            value={data.confirmPassword}
          />
          <div>
          <button
              className={`${ isLoading ? "opacity-40 my-4 group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none" : "my-4 group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none"}`}
              disabled={isLoading}
            >
              {isLoading ? "Cargando..." : "Registrarme"}
            </button>
            <div className="px-8 py-4 bg-gray-600 text-center rounded-md">
              <p className="text-gray-400">Already have an account? {""}</p>
              <Link to={"/login"} className="underline font-medium text-gray-900 hover:text-black">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}