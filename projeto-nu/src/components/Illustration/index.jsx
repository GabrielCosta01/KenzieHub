import img from "../../assets/illustrationn.svg"
import "./style.css"

const Ilustracao = () => {
    return (
        <section className="sectionImg_container">
            <img src={img} alt="illustração" />
        </section>
    )
}

export default Ilustracao