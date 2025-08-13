import css from './Navbar.module.css';
import cart_icon from '../../assets/cart_icon.png';
import clothing2_icon from '../../assets/clothing2_icon.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('');

  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className={css.navbar}>
      <div className={css.navbarLogo}>
        <img src={clothing2_icon} alt="Store Logo" className={css.clothImg} />
      </div>

      <ul className={css.navMenu}>
        <li onClick={() => setMenu('shop')}>
          <Link to="/" className={css.navLink}>Shop</Link>
          {menu === 'shop' && <hr className={css.activeHr} />}
        </li>
        <li onClick={() => setMenu('Men')}>
          <Link to="/men" className={css.navLink}>Men</Link>
          {menu === 'Men' && <hr className={css.activeHr} />}
        </li>
        <li onClick={() => setMenu('Women')}>
          <Link to="/women" className={css.navLink}>Women</Link>
          {menu === 'Women' && <hr className={css.activeHr} />}
        </li>
        <li onClick={() => setMenu('Kids')}>
          <Link to="/kids" className={css.navLink}>Kids</Link>
          {menu === 'Kids' && <hr className={css.activeHr} />}
        </li>
      </ul>

      <div className={css.navSearch}>
        <input type="text" placeholder="Search..." />
        <button>
          <FaSearch size={18} />
        </button>
      </div>

      <div className={css.navLoginCart}>
        <Link to="/login" className={css.loginIcon}>
          <FaUser size={20} />
        </Link>
        <Link to="/cart" className={css.cartContainer}>
          <img src={cart_icon} alt="Cart" className={css.cartIcon} />
          <span className={css.cartCount}>{getTotalCartItems()}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;