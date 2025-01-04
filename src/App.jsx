import { Route, Routes } from "react-router-dom";
import { Footer, NavBar, MainProvider, ProductDetail } from "./components";
import { RegisterPage, HomePage, LoginPage, AboutUs, NotFound, 
  ProductsPage, CartPage, WishPage } from "./pages";
import './App.css'

function App() {
  
  return (
    <div className="min-h-screen bg-slate-100 grid grid-rows-3:auto 1fr auto">
      <header>
        <div className="bg-black text-white text-center capitalize p-2">
          <p>new year sale for accesories /
            delivery-off 35%! <b><u>shop now</u></b>
          </p> 
        </div>
        <hr className="border-white"/>
        <div>
          <NavBar/>
        </div>
      </header>
        <main className="p-12">
          <MainProvider>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="/products" element={<ProductsPage/>} />
              <Route path="/about" element={<AboutUs/>}/>
              <Route path="/wishlist" element={<WishPage/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/*" element={<NotFound/>}/>
              <Route path="/product/:id" element={<ProductDetail/>} />
            </Routes>
          </MainProvider>
        </main>
      <footer className="mt-auto"><Footer/></footer>
    </div>
  )
}

export default App