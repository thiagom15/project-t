import React, { useEffect } from "react";
import { useProducts } from "../hooks";
import { useDispatch } from "react-redux";
import { setUserLogged } from "../store/userSlice";
import { getUserLogged } from "../services";
import { getAllProducts } from "../services"

export function MainProvider({ children }) {
  const { setProductStore } = useProducts()
  const dispatch = useDispatch()
  const accessToken = localStorage.getItem("accessToken")
  useEffect(() => {
    const fetchData = async () => {
      if (accessToken) {
        const userLogged = await getUserLogged(accessToken)
        dispatch(setUserLogged(userLogged.data))
      }
    }
    fetchData()
  }, [])
  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await getAllProducts()
        const data = res.data

        const productList = data.products
        setProductStore(productList)
      } catch (error) {
        console.error("Error en API", error)
      }
    }
    fetchData()
  }, [])
  return <>{ children }</>
}