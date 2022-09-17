import { FC } from "react"
import { IButtonProps } from "../../module"
import { MdDone } from "react-icons/md";

const Button: FC<IButtonProps> = ({ completed, btnFunc }) => {
    return (
        <button className="buttonCircle" onClick={btnFunc}>
            { completed && <MdDone />}
        </button>
    )
}

export default Button