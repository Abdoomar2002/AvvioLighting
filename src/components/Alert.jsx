import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
// Import the CSS file for styling

function Alert({ message, type, set, act }) {
  useEffect(() => {
    if (act) {
      setTimeout(() => {
        set(false);
        let popup = document.getElementById("popup1");
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
      }, 5000);
    }
  }, [act]);

  return (
    <section className="d-flex justify-content-center">
      <style>
        {`.translate-up2 {
        height: max-content;
        transform: translateY(0%);
        transition: transform ease 0.8s;
       
      }
      .translate-down2 {
        transform: translateY(-100%);
        transition: transform ease 0.3s;
       `}
      </style>
      <div
        className={
          act ? "notification translate-up2" : "notification  translate-down2"
        }
        style={
          type == "error"
            ? { backgroundColor: "var(--bs-danger)" }
            : { backgroundColor: "var(--bs-success)" }
        }
      >
        {message}
      </div>
    </section>
  );
}

export default Alert;
