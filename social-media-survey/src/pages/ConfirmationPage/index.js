import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";

function ConfirmationPage() {
  return (
    <div className="confirmation_page">
      <div className="confirmation_page_content">
        <h1>Thank You For Your Submission!</h1>
        <p>Make sure to go outside today.</p>
      </div>
      <div className="confirmation_page_button">
        <Link to="/">
          <button>Try Again</button>
        </Link>
      </div>
    </div>
  );
}

export { ConfirmationPage };
