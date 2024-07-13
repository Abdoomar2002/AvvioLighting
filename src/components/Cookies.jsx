import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import "./CookieConsentBar.css";
function Cookies() {
  // Set a cookie

  const [showConsentBar, setShowConsentBar] = useState(false);
  useEffect(() => {
    if (document.cookie.includes("UserName")) {
      setShowConsentBar(false);
    } else setShowConsentBar(true);
  }, []);
  const handleConsent = () => {
    setShowConsentBar(false);
    setCookie("UserName", "Name", 7 * 24 * 60 * 60);
    // After one week, delete the cookie

    // You can also set a cookie to remember the user's choice
  };
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  return (
    <div
      className={
        showConsentBar
          ? "cookie-consent-bar translate-up"
          : "cookie-consent-bar translate-down"
      }
    >
      <p>
        This website utilizes cookies to optimize your browsing experience on
        Avvio Lighting's platform. By navigating through our website, you
        signify your consent to the application of cookies as outlined in our{" "}
        {"         "}
        <a
          href="https://avvio-website-w5pw.onrender.com/data/Cookies%20policy%20Avvio.pdf"
          target="blank"
        >
          {"         "}
          Privacy Policy.
        </a>
        <button className="btn btn-dark" onClick={handleConsent}>
          Accept
        </button>
      </p>
    </div>
  );
}

export default Cookies;
