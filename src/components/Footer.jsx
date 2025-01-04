import React from "react";
import { Link } from "react-router-dom" ;
import { FaFacebook , FaInstagram , FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer  () {
    return (
        <footer className= "bg-black text-white" >
            <div className="grid text-center grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-16 lg:px-28 pt-4">
                
                <div>
                     <h2 className= "text-lg font-extrabold md-4 pb-4">Soporte</h2>
                     <p> <Link  className="text-white hover:underline" to="https://www.google.com/maps/place/%C3%81rea+51,+Nevada,+EE.+UU./data=!4m2!3m1!1s0x80b81baaba3e8c81:0x970427e38e6237ae?sa=X&ved=1t:242&ictx=111&cshid=1734689953844611">
                     Area 51, Nevada, Estados Unidos. </Link></p>
                     <br/>
                     <p className="text-white">TiendaSoporte@gmail.com</p>
                     <p className="text-white">0800-199-162</p>
                </div>

                <div>
                    <h2 className= "text-lg font-extrabold md-4 pb-4">Cuenta</h2>
                    <p><Link to="/login" className="hover:underline">Iniciar Sesión</Link></p>
                    <p><Link to= "/register" className="hover:underline">Registrarse</Link></p>
                    <p><Link to= "/wishlist" className="hover:underline">Favoritos</Link></p> 
                </div>

                <div>
                    <h2 className="text-lg font-extrabold md-4 pb-4">Enlaces</h2>
                    <p><Link to={"https://policies.google.com/privacy"} className="text-white hover:underline">
                        Politica de Privacidad 
                    </Link></p>
                    <p><Link to={"https://policies.google.com/terms"} className="text-white hover:underline">
                        Terminos de Uso
                    </Link></p>
                    <p><Link to={"https://policies.google.com/faq"} className="text-white hover:underline">
                        Preguntas Frecuentes
                    </Link></p>
                    <p><Link to={"https://support.google.com/contacts"} className="text-white hover:underline hover:text-#34465d">
                        Contacto 
                    </Link></p>
                </div>

                <div>
                    <h2 className="text-lg font-extrabold md-4 pb-4">Descarga la App<Link to={"https://play.google.com"}><img src="qr.png" className="size-24 mt-2 justify-self-center"/></Link></h2>

                    <ul className="flex space-x-4 justify-self-center">
                        <li><Link to={"https://facebook.com"} className="hover:text-[#1877f2]"><FaFacebook/></Link></li>
                        <li><Link to={"https://instagram.com"} className="hover:text-[#e4405f]"><FaInstagram/></Link></li>
                        <li><Link to={"https://linkedin.com"} className="hover:text-[#0077b5]"><FaLinkedin/></Link></li>
                        <li><Link to={"https://x.com"} className="hover:text-[#000000]"><FaXTwitter/></Link></li>
                        <li><Link to={"https://www.whatsapp.com/"} className="hover:text-[#25d366]"><FaWhatsapp/></Link></li> 
                    </ul>
                </div>
            </div>
            <br/>
            <div className="text-center p-4 mr-auto ml-auto border-t border-whitep-4 text-white text-sm">
                <p>© 2025 Mi tienda. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
};