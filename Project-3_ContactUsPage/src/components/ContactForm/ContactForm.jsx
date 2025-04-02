import css from "./ContactForm.module.css"
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";



const ContactForm = () => {

    const onSubmit = (event)=>{
        event.preventDefault();
        console.log("Name -> ", event.target[0].value)
        console.log("Email -> ", event.target[1].value)
        console.log("Text -> ", event.target[2].value)

        console.log(event);
    }

  return (
    
    <section className={css.container}>

        <div className={css.contactForm}>

            <div className={css.topBtn}>
                <Button text="VIA SUPPORT CHAT" isOutline={false} icon={<MdMessage fontSize="24px"/> }></Button>
                <Button text="VIA CALL" isOutline={false} icon={<FaPhoneAlt fontSize="18px"/>}></Button>
            </div>

            <Button text="VIA EMAIL FORM" isOutline={true} icon={<FaWpforms fontSize="18px"/>}></Button>

            <form onSubmit={onSubmit}>
                <div className={css.formControl}> 
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                </div>
                <div className={css.formControl}> 
                    <label htmlFor="Email">E-mail</label>
                    <input type="text" name="Email"/>
                </div>
                <div className={css.formControl}> 
                    <label htmlFor="text">Text</label>
                    <textarea type="text" rows="8" name="text"/>
                </div>
                <div style={{
                    display:"flex",
                    justifyContent:"end",
                }}>
                    <Button text="Submit" isOutline={false}></Button>
                </div>
            </form>

        </div>

        <div className={css.contactImage}>
            <img src="/images/contact.svg" alt="serviceLogo" />
        </div>

    </section>

  )
}

export default ContactForm