import { Contact } from "./Contact";
import { CopyRight } from "./CopyRight";
import { SmallLogo } from "./SmallLogo";

export const Footer = () => {
    return (
        <footer className="footer">
            <SmallLogo />
            <CopyRight />
            <Contact />
        </footer>
    );
};