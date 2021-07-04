import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Packages from "./components/Packages";
import Footer from "./components/Footer";

function App() {
  const [isScrolled, SetIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollY > 0 ? SetIsScrolled(true) : SetIsScrolled(false);

    window.addEventListener("scroll", () => {
      let header = document.getElementById("header");
      header!.classList.toggle("sticky", window.scrollY > 0);

      window.scrollY > 0 ? SetIsScrolled(true) : SetIsScrolled(false);
    });
  }, [isScrolled]);

  return (
    <div>
      <NavBar scrolled={isScrolled} />
      <Header />
      <Packages />
      <Footer />
    </div>
  );
}

export default App;
