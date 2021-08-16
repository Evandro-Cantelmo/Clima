import React from "react";
import "./style.css";

// import { Container } from './styles';

function Card(props) {
  return (
    <div className="corpo">
      <div className="tela">
        <div className="cont">
          <div className="top">
            <h3>{props.cityName}</h3>
            <p>{props.data}</p>
          </div>
          <p>Temperatura: {props.tempe}º </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
