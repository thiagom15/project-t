import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const getAllProducts = async () => {
    return await axios.get(`${API_URL}/products`); }

export const getProductById = async (id) => {
    return await axios.get(`${API_URL}/products/${id}`); }

export const getProductSearched = async (searchValue) => {
    return await axios.get(`${API_URL}/products/search?search=${searchValue}`); }

export const getCategories = async () => {
    return await axios.get(`${API_URL}/products/category-list`); }