import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/login.service";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { setUserLogged } from "../../store/userSlice"

export function LoginForm() {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      email: email,
      password: password,
    }
    try {
      if (data.email === "" || data.password === "") {
        message.info("Faltan datos")
        return
      }
      setIsLoading(true)
      const response = await login(data)
      console.log("Respuesta del Login", response.data)
      const accessToken = response.data.backendTokens.accessToken
      localStorage.setItem("accessToken", accessToken)
      dispatch(setUserLogged(response.data.user))
      nav("/")
    } catch (error) {
      message.error("Credenciales invalidas")
      console.log("Error at Login", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="max-w-lg w-full mr-auto ml-auto"onSubmit={handleSubmit}>

      <div className="bg-gray-500 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-10">
          <h2 className="text-center text-3xl font-bold text-black">
            Iniciar sesión
          </h2>
          <p className="mt-4 text-center text-black">Ingresá para continuar</p>
            <input
              className="mt-4 rounded-md shadow-sm relative block w-full px-3 py-3 border border-gray-600 bg-gray-600 text-white focus:outline-none focus:ring-gray-700 focus:border-gray-800 focus:z-10 sm:text-sm"
              placeholder="mitienda@ejemplo.com"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              className="mt-4 rounded-md shadow-sm relative block w-full px-3 py-3 border border-gray-600 bg-gray-600 text-white focus:outline-none focus:ring-gray-700 focus:border-gray-800 focus:z-10 sm:text-sm"
              placeholder="******"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          
          <div>
            <div className="flex items-center">
              <input
                className="h-4 w-4 text-gray-600 focus:ring-black border-gray-600 rounded"
                type="checkbox"
                name="remember-me"
                id="remember-me"
              />
              <label className="p-3 block text-sm text-gray-400"
              >Remember me</label>
              </div>
              <div className="text-sm text-center">
                <a className="font-medium text-gray-900 hover:text-black hover:underline hover:cursor-pointer">
                  Olvidaste tu contraseña?
                </a>
              </div>
          </div>

          <div>
            <button
              className={`${ isLoading ? "opacity-40 my-4 group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none" : "my-4 group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none" }`}
              disabled={isLoading}
            >
              {isLoading ? "Cargando..." : "Iniciar sesión"}
            </button>
            <div className="px-8 py-4 bg-gray-600 text-center rounded-md">
              <p className="text-gray-400">No tienes cuenta? {""}</p>
              <Link to={"/register"} className="underline font-medium text-gray-900 hover:text-black">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>

  )
}