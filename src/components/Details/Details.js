import React from "react";
import details from "../../images/Details.svg";
import flowers from "../../images/flowersDetails.svg";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <img src={flowers} alt="цветы" className="details__flowers"></ img>
      <p className="details__text">Обратите внимание, что формат мероприятия не предполагают детской площадки и аниматоров. Пожалуйста, позаботьтесь
о том, чтобы провести этот вечер без детей.</p>
      <p className="details__text">Мы будем рады, если вместо цветов вы подарите нам вашу любимую книгу для нашей семейной библиотеки</p>
      <p className="details__text">От всего сердца просим вас воздержаться от криков "Горько!"
и сохранить атмосферу уютного семейного праздника.</p>
    </section>
  );
}

export default Details;