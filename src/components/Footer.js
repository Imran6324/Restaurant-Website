import React from "react";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {" "}
        <a href="https://github.com/Imran6324">
          <i class="fa fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/mohammad-imran-khan-442bb31bb/">
          <i class="fa fa-linkedin fa-2x"></i>
        </a>
      </div>
      <p> &copy; 2021 IndianFood.com by @Imran</p>
    </div>
  );
}

export default Footer;
