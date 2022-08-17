import { Route, Routes } from "react-router-dom";
import { Accounts } from "./views/Accounts";
import { FAQ } from "./views/FAQ";
import { Home } from "./views/Home";

export const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>
        </main>
    );
};