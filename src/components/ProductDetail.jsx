import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../services";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { MdFavorite } from "react-icons/md";
import { message } from "antd";
import { addToFav } from "../store/favSlice";

export function ProductDetail() {

  const [quantity, setQuantity] = useState(1);
  const handleLessQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
  }
  const handleMoreQuantity = () => {
    setQuantity(quantity + 1)
  }

  const carts = useSelector(store => store.cart.items);
  console.log(carts)
  const dispatch = useDispatch();

  const nav = useNavigate();
  const userLogged = useSelector((state) => state.user.userLogged);

  const handleAddToCart = () => {
    if (!(userLogged && userLogged.name)) {
      return nav("/login");
    }
    dispatch(addToCart({
      product: product,
      quantity: quantity
    }));
    message.success("Producto agregado al carrito!");
  };

  const handleAddToFav = () => {
    if (!(userLogged && userLogged.name)) {
      return nav("/login");
    }
    dispatch(addToFav({
      product: product,
      quantity: quantity
    }));
    message.success("Producto agregado a favoritos!");
  };

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getProductById(id);

        console.log("data de la respuesta : ", res.data);

        const productDetail = res.data;
        setProduct(productDetail);
      } catch (error) {
        console.error("Error product detail api,", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (

  <><h2><Link className="underline flex font-bold" to={"/"}>
    Volver
  </Link></h2>
  
    <div className="bg-slate-200 shadow-xl grid grid-cols-1  md:grid-cols-2   md:px-16 lg:px-28  gap-5 mt-5 rounded-md mx-auto">

      <div className="flex flex-col items-center bg-gray-300 shadow-xl rounded-md m-5">
        <div className="grid grid-cols-2 text-2xl">
          <p>☆ {product.rating}</p> 
          <p>Stock: {product.stock}</p>
        </div>
          {product.images.map((imageSrc) => (
            <img src={imageSrc} className="size-[250px]" />
          ))}
      </div>

      <div className="flex flex-col gap-5 m-5">
        <p className="text-4xl uppercase font-bold">{product.title}</p>

        <section className="font-bold text-3xl">
          <p>$ {product.price}</p>
        </section>

        <div className="flex gap-5 text-2xl text-black">
          <div className="flex gap-5">
            <button className="bg-white h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={handleLessQuantity}>-</button>
            <span className="bg-gray-400 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">{quantity}</span>
            <button className="bg-white h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={handleMoreQuantity}>+</button>
          </div>
          <button onClick={handleAddToCart} className="my-4 relative flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
            Add to cart
          </button>
          <button onClick={handleAddToFav} className="rounded-lg border border-transparent hover:border-gray-500">
            <MdFavorite />
          </button>
        </div>
        <p className="font-bold text-2xl"> {product.description}</p>
      </div>
    </div></>

  );
}