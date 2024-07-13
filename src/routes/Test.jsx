import React, { useState } from "react";
import Alert from "../components/Alert"; // Adjust the path accordingly
import { Alert as All } from "react-bootstrap";
function Test() {
  const [notification, setNotification] = useState({
    message: "Email sent successfully!",
    type: "error1",
  });
  const [act, setAct] = useState(false);
  const sendEmail = () => {
    // Simulate sending email
    const emailSent = true; // Change to false to simulate failure
    function sendEmail() {}
    handleClick();
  };
  function handleClick() {
    setAct(!act);
  }
  return (
    <div>
      <button onClick={sendEmail}>Send Email</button>

      <Alert
        message={notification.message}
        type={notification.type}
        set={setAct}
        act={act}
      />
    </div>
  );
}

export default Test;
