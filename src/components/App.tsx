import { useBackground } from "../hooks/useBackground";
import { useScrollUp } from "../hooks/useScrollUp";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Main } from "./Main";

export const App = () => {
  useScrollUp();
  useBackground();

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};