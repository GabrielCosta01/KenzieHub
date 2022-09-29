import logoNu from "../../assets/Nu Kenzie.svg"
import "../../style/global.css"
import "../../style/button.css"
import "./style.css"

const header = ({children}) => {

    return (
        <header className="header_container">
            <img src={logoNu} alt="" />
             { children }
        </header>
    )

}
export default header