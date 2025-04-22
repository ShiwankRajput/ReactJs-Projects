import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={css.navbar}>
      <div className={css.navLogo}>
        <img src="/images/logo.png" alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className={css.navMenu}>
        <li>Shop <hr/></li>
        <li>Men</li>
        <li>Women</li>
        <li>kids</li>
      </ul>
      <div className={css.navLoginCart}>
        <button>Login</button>
        <img src="/images/cart_icon.png" alt="" />
        <div className={css.navCartCount}>0</div>
      </div>
    </div>
  )
}

export default Navbar