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
          <input placeholder="City"></input>
          <img src={props.image}></img>
          <h4>{props.situation}</h4>
          <div className="middle">
            <div className="card">
              <h6>Humidity</h6>
              <p>{props.humidity}%</p>
            </div>
            <div className="card">
              <h6>Temp</h6>
              <p>{props.tempe}º</p>
            </div>
          </div>
          <div className="finalMenu">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
