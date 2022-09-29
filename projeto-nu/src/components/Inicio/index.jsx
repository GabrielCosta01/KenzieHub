import "../../style/button.css"
import "./style.css"
import logoNu from "../../assets/Nu Kenzie.png"

const main = ({children}) => {
return(
  <section className="sectionBody_container">
        <img src={logoNu} alt="" />
        <h1>Centralize o controle das suas finanças</h1>
        <span>de forma rápida e segura</span>
        { children }
  </section>
)
}

export default main 