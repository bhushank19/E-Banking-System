import React from "react";
import { render } from "react-dom";
import "../footer.css"

const Footer = () => (
  <footer className="footer">
    <p> Security tips | Disclaimer | Privacy Policy | Useful Links| Cookies Policy | Term & Conditions |
</p>
  </footer>
);


render([<Footer key="1" />], document.getElementById("root"));

export default Footer