import css from "./Button.module.css"

const Button = ({text, icon, isOutline, ...rest}) => {
  return (
    <button {...rest} className={isOutline ? css.outlineBtn : css.primaryBtn}>
        {icon}
        {text}
    </button>
  )
}

export default Button