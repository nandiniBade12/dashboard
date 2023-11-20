import React, { useState, useEffect } from "react";

import GaugeChart from "react-gauge-chart";

 

const chartStyle = {

  height: 50,

};

 

const MyGaugeChart = () => {

  const [value, setValue] = useState(0.5);

 

 

  useEffect(() => {

    const interval = setInterval(() => {

      const newValue = Math.random();

      setValue(newValue);

    }, 3000);

 

    return () => clearInterval(interval);

  }, []);

 

  const getColorForValue = (value) => {

    if (value <= 0.25) return "#FF5F6D";

    if (value <= 0.5) return "#FFB200";

    if (value <= 0.75) return "#F2FF00";

    return "#00FF00";

  };

 

  const getPerformanceLabel = (value) => {

    if (value <= 0.25) return "Poor";

    if (value <= 0.5) return "Fair";

    if (value <= 0.75) return "Good";

    return "Excellent";

  };

 

  return (

    <div>

      <GaugeChart

        id="gauge-chart1"

        style={chartStyle}

        nrOfLevels={20}

        arcsLength={[0.25, 0.25, 0.25, 0.25]}

        colors={[

          getColorForValue(0.25),

          getColorForValue(0.5),

          getColorForValue(0.75),

          getColorForValue(1),

        ]}

        percent={value}

        arcPadding={0.02}

        textColor="black"

        formatTextValue={() => getPerformanceLabel(value)}

      />

    </div>

  );

};

 

export default MyGaugeChart;