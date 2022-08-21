import { FiMail } from "react-icons/fi";
import { EMAIL } from "../../config";

export const Contact = () => {
    return (
        <a href={`mailto:${EMAIL}`} className="link footer__contact"><FiMail className="footer__contact-icon" />Contact me</a>
    );
};