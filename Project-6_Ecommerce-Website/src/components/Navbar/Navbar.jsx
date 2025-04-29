import { useState } from "react";
import css from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className={css.navbar}>
      <div className={css.navLogo}>
        <img src="/images/logo.png" alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className={css.navMenu}>
        <li onClick={()=>setMenu("shop")}><Link style={{textDecoration: 'none'}} to="/">Shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={()=>setMenu("mens")}><Link style={{textDecoration: 'none'}} to="/mens">Men</Link> {menu === "mens" ? <hr/> : <></>}</li>
        <li onClick={()=>setMenu("womens")}><Link style={{textDecoration: 'none'}} to="/womens">Women</Link> {menu === "womens" ? <hr/> : <></>}</li>
        <li onClick={()=>setMenu("kids")}><Link style={{textDecoration: 'none'}} to="/kids">Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
      </ul>
      <div className={css.navLoginCart}>
        <Link style={{textDecoration: 'none'}} to="/login"><button>Login</button></Link>
        <Link style={{textDecoration: 'none'}} to="/cart"><img src="/images/cart_icon.png" alt="" /></Link>
        <div className={css.navCartCount}>0</div>
      </div>
    </div>
  )
}

export default Navbar