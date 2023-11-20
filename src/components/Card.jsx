import React from 'react';

import './Scorecard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUsers,
  faUserClock,
  faUsersRectangle,
  faBullseye,
  faLightbulb,
  faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Card({ title, content, backgroundColor, icon, icon2 }) {

  const cardStyle = {

    backgroundColor: backgroundColor || 'white', // Use the provided background color or default to white

  };

  return (

    <div className="card" style={cardStyle}>

      <div className="icon"><FontAwesomeIcon icon={icon}/></div>

      <h2>{title}</h2>

      <p>{content}</p>

      <div className="icon2"><FontAwesomeIcon icon={icon2}/></div>

    </div>

  );

}

export default Card;