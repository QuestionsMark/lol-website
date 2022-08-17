import { Logo } from "./Logo";
import { Nav } from "./Nav";


export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    );
};