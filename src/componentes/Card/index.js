import React from 'react';
import "./style.css";

// import { Container } from './styles';

function Card(props) {

  return (
      <div className='corpo'>
          <div className='tela'>
              <div className='cont'>
                  <h3>Clima</h3>
                  <h4>{props.cityName}</h4>
              </div>
          </div>
      </div>
  );
}

export default Card;