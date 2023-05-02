import React from "react";
import "./Header.css";
import flower from "../../images/flower.svg";

function Header() {
  return (
    <section className="header" id="home">
      <img src={flower} alt="Кирилл и Александра" className="header__flower"></ img>
    </section>
  );
}

export default Header;