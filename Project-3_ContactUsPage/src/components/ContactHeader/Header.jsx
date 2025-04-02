import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${css.contactSection} ${css.container}`}>
        <h3>CONTACT US</h3>
        <p>"Got a question about our services? Need assistance with a project? Our team is always ready to help! Contact us via email, phone, or the form below, and we’ll get back to you as soon as possible. We look forward to working with you!"</p> 
    </div>
  )
}

export default Header