import React from "react";
import names from "../../images/names.svg";
import flower from "../../images/flowers.svg";
import stone from "../../images/stone.png";
import where from "../../images/where.svg";
import banquet from "../../images/banquet.svg";
import flowermapLeft from "../../images/flowersLeft.png";
import flowermapRight from "../../images/flowersRight.png";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date">
      <div className="info-date__invitation">
        <img className="info-date__flower" alt="цветы" src={flower}></img>
        <img className="info-date__stone" alt="разводы" src={stone}></img>
        <img className="info-date__who" alt="Дорогие родные и друзья" src={names}></img>
        <p className="info-date__description">Один день в этом году будет для нас особенным и мы хотим провести его в кругу близких и друзей. С большим удовольствием приглашаем вас на знаменательный праздник - нашу свадьбу!</p>
        <div className="info-date__info">
          <p className="info-date__text">Пятница</p>
          <p className="info-date__date">07 &middot; 07 &middot; 2023</p>
          <p className="info-date__text info-date__text-nomargin">Сбор гостей в 15:00</p>
        </div>
      </div>
      <div className="info-date__place" id="place">
        <div className="info-date__check-in info-date__check-in_color_white">
          <div className="info-date__block-text">
            <img className="info-date__where" alt="торжественная регистрация" src={where}></img>
            <p className="info-date__text info-date__text_position_right">Дворец Бракосочетаяния 1 <br /> Английская набережная, 28 <br />Начало в 15.30</p>
          </div>
          <div className="info-date__with-map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A46d88a0009071250c064c30503a26d3cf6644cf299e1b141f328c94ae0a5180d&amp;source=constructor"
              frameBorder="0" title="ЗАГС" className="info-date__map"></iframe>
            <img className="info-date__flower-map" alt="цветок" src={flowermapLeft}></img>
          </div>
        </div>
        <div className="info-date__check-in">
          <div className="info-date__with-map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abd356beb7724aa398fee8236be3b813cd4ed5afe081f36c6d5a33f67245094a3&amp;source=constructor" 
              frameBorder="0" title="ресторан" className="info-date__map info-date__map-left"></iframe>
            <img className="info-date__flower-map-white" alt="цветок" src={flowermapRight}></img>
          </div>
          <div className="info-date__block-text">
            <img className="info-date__where info-date__where_position_left" alt="праздничный банкет" src={banquet}></img>
            <p className="info-date__text info-date__text_position_left">Pесторан «весенний» <br /> Наб. Обводного канала 199 <br />Начало в 17.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoDate;