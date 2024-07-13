import Home from "./routes/Home";
import "./App.css";
import "./assest/style.css";
import "./assest/styles.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactUs from "./routes/ContactUs";
import Products from "./routes/Products";
import Error from "./components/Error";
import Consts from "./components/Consts";
import Category from "./routes/Category";
import Model from "./routes/Model";
import Search from "./routes/Search";
import Test from "./routes/Test";
import "./components/CollapseDarkModeCarousel.css";
import Download from "./routes/Download";
import About from "./routes/About";
import Cookies from "./components/Cookies";
import axios from "axios";
// Custom CSS file for dark mode
//import CollapseDarkModeCarousel from "./components/bootstrap";
function App() {
  let errorElement = <Error code="not found 404" />;
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    axios
      .get("https://api.ipify.org/?format=json")
      .then((res) => {
        axios
          .get(
            "http://api.ipstack.com/" +
              res.data.ip +
              "?access_key=4e63e6b5d272966ace9c416388c56a6c"
          )
          .then((res) => console.log(res.data.country_name))
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));
  });

  const toggleDarkMode = (e) => {
    console.log("hi");
    if (e.target.id == "lightmode") setDarkMode(false);
    else if ((e.target.id = "darkmode")) {
      setDarkMode(true);
    }
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home toggleDarkMode={toggleDarkMode} darkMode={darkMode} />,
      errorElement: errorElement,
    },
    {
      path: "/Home",
      element: <Home />,
      errorElement: errorElement,
    },
    {
      path: "/ContactUS",
      element: <ContactUs />,
      errorElement: errorElement,
    },
    {
      path: "/Products",
      element: <Products />,
      errorElement: errorElement,
    },
    {
      path: "/Products/:name",
      element: <Category />,
      errorElement: errorElement,
    },
    {
      path: "/Products/:category/:product",
      element: <Model />,
      errorElement: errorElement,
    },
    {
      path: "/Search/:key",
      element: <Search />,
      errorElement: errorElement,
    },
    {
      path: "/Test",
      element: <Test />,
      errorElement: <div>{errorElement.key}</div>,
    },
    {
      path: "/Download",
      element: <Download />,
      errorElement: errorElement,
    },
    {
      path: "/About",
      element: <About />,
      errorElement: errorElement,
    },
  ]);
  return (
    <div className={"App" + `app ${darkMode ? "dark-mode" : ""}`}>
      <RouterProvider router={router} />
      <Cookies />
    </div>
  );
}

export default App;
