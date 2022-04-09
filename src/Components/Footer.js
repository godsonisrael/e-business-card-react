import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="footer-container">
            <a href="https://www.linkedin.com/in/godson-jeffry/"
               rel="noreferrer"
               target="_blank">
                   <FontAwesomeIcon icon={ faLinkedin } color="white" />
            </a>
            <a href="https://github.com/godsonisrael"
               rel="noreferrer"
               target="_blank">
                   <FontAwesomeIcon icon={ faGithub } color="white" />
            </a>
        </div>
    )
}