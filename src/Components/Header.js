import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PictureG from "../images/godson.jpg"
import '../App.css'


export default function Header() {
    return (
        <div className="header-container">
            <img className="header-image" src = {PictureG} alt="Godson" />
            <h1 className="header-name">Godson</h1>
            <h3>Web Developer</h3>
            <div className="header-email">
                <a href="mailto:godsonjeffry27@gmail.com"><FontAwesomeIcon icon={ faEnvelope } fontSize="22px" color='black' /> &nbsp; E-mail </a>
            </div>
        </div>

    )
}