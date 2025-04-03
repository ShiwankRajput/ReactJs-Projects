import css from "./Box.module.css"

const Box = ({number, onClick, isSelected}) => {
  return (
    <div className={isSelected ? `${css.boxSelectedDisplay}` : `${css.boxDisplay}`} onClick={onClick}>
        {number}
    </div>
  )
}

export default Box