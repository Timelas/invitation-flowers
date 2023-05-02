import React from "react";
import names from "../../images/namesFooter.svg";
import flowers from "../../images/flowersFooter.png";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <p className="footer__text">До скорой встречи,</p>
        <img src={names} alt="Алексей и Виктория" className="footer__names"></img>
      </div>
      <img src={flowers} alt="цветы" className="footer__flowers"></ img>
    </section>
  );
}

export default Footer;