import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
  const [showBtn, setShowBtn] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" style={{ marginTop: 0 }} />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" style={{ marginTop: 0 }} />
      <Footer />
      <a href="#up" style={{ opacity: showBtn ? 1 : 0, transition: "1s" }}>
        <button className="scrolltotop icon-keyboard_arrow_up" />
      </a>
    </div>
  );
}

export default App;
