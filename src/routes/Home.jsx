//import Consts from "../components/Consts";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "../components/Carousel";
import Recent from "../components/Recent";
import AboutHome from "../components/AboutHome";
import News from "../components/News";

function Home(props) {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    function load() {
      //setLoader(true);
      setTimeout(() => {
        setLoader(false);
      }, 15000);
    }
    load();
  }, []);
  return loader === false ? (
    <>
      <NavBar active="Home" onload={pageLoad} />
      <Carousel />
      <br />
      <br />
      <br />
      <Recent />
      <AboutHome />
      <News />
      <br />
      <br />
      <br />

      <Footer active="Home" />
    </>
  ) : (
    <Loader />
  );
}
function pageLoad(e) {
  var navbar = document.querySelector(".navbar");
  if (navbar != null) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("scrolled");
  }
  return null;
}

export default Home;
