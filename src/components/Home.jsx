import React from 'react';
import MyGaugeChart from './MyGaugeChart';
import './Home.css';

const Home = () => {

 

  return (

    <div className="chart-container">

      <div className="chart-grid">

        <div className="chart-item">


          <MyGaugeChart />

 

          <div className="chart-label">1. Billable Fresher</div>

 

        </div>

 

        <div className="chart-item">

 

          <MyGaugeChart />

 

          <div className="chart-label">2. Fresher Pyramid</div>

 

        </div>

 

        <div className="chart-item">

 

          <MyGaugeChart />

 

          <div className="chart-label">3. Attrition</div>

 

        </div>

 

        <div className="chart-item">

 

          <MyGaugeChart />

 

          <div className="chart-label">4. TRIO BUDGET VS ACTUAL</div>

 

        </div>

 

        <div className="chart-item">

 

          <MyGaugeChart />

 

          <div className="chart-label">5. HYPERSCALER</div>

 

        </div>

 

        <div className="chart-item">

 

          <MyGaugeChart />

 

          <div className="chart-label">6. Rotation</div>

 

        </div>

 

      </div>

 

    </div>

 

  );

 

};

 

export default Home;