import React from "react";
import './Scorecard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserClock, faUsersRectangle, faLightbulb } from '@fortawesome/free-solid-svg-icons';

import { faCircleArrowRight, faBullseye } from '@fortawesome/free-solid-svg-icons';

import { faUsersGear } from '@fortawesome/free-solid-svg-icons';

function Scorecard() {


    const cardsData = [

        { id:1, title: '276(0)', content: 'Young Professionals', bgColor: '#3a9beb', icon: faUsers },
        { id:2, title: '160(0)', content: 'Active Young Professionals', bgColor: '#8ad815', icon: faUsersGear },
        { id:3, title: '116(0)', content: 'Deployed Young Professionals', bgColor: '#3fbbf5', icon: faBullseye },
        { id:4, title: '25(0)', content: 'Solutions Created/Matured', bgColor: '#0a9e31', icon: faLightbulb },
        { id:5, title: '2518(0)', content: 'Efforts in Pds (ETAP)', bgColor: '#6bd9ef', icon: faUsersRectangle },
        { id:6, title: 'MALS-340(0)', content: 'Efforts in Pds', bgColor: '#33a74c', icon: faUsersRectangle , size: '20px'},
        { id:7, title: '131d(0)', content: 'Avg Deployment time (ETAP Core+MG)', bgColor: '#e48526', icon:faUserClock },
        { id:8, title: '119d(1)', content: 'Avg Deployment Time(ETAP MG)', bgColor: '#8ad815', icon:faUserClock }
      ];

    return(
    <div className="head" >
  
      <div className="nav-bar">
        <center><h1 style={{"color": "white"}}>SCORECARD 2022</h1></center>
      </div>
        
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input"/>
       
          <hr/>
      </div>

    {/* break */}

    <div className="container">
      <div className="row-container">

      {cardsData.map(card => (
            <div className="card-div" key={card.id} style={{backgroundColor:card.bgColor}}>
              <FontAwesomeIcon icon={card.icon} size="3x" className="arrow-icon" />
              <h2 className="text" style={{fontSize: card.size}}><b>{card.title}</b></h2>
              <p className="sub-text"><b>{card.content}</b></p>
              <p><FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="arrow-icon" /></p>
            </div>
          ))}

      </div> {/*end of row container */}

    </div> {/*end of container */}
    </div>
    );

}

export default Scorecard;