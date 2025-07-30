import css from './Footer.module.css';
import footer_image from '../../assets/logo_big.png';
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className={css.footer}>

      <div className={css.footerLogo}> 
        <img src={footer_image} alt="" />
      </div>

      <ul className={css.footerLinks}>
        <li>Company</li>
        <li>Products</li>
        <li>Offers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className={css.footerSocialIcons}>

        <div className={css.footerIconContainer}>
            <img src={instagram_icon} alt="" />
        </div>    
        <div className={css.footerIconContainer}>
            <img src={pintester_icon} alt="" />
        </div>
        <div className={css.footerIconContainer}>
            <img src={whatsapp_icon} alt="" />
        </div>

      </div>

      <div className={css.footerCopyright}>
        <hr />
        <p>Copyright @ 2025 - All Rights Reserved</p>
      </div>

    </div>
  )
}

export default Footer