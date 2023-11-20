import React from "react";

import GaugeChart from "react-gauge-chart";

 

const chartStyle = {

  height: 200, // Increase the height to make the chart more visible

};

const Dashboard1 = () => {

  const staticValue = 0.75; // Set a static value (between 0 and 1) for performance

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

        percent={staticValue} // Use the staticValue instead of the state variable

        arcPadding={0.02}

        textColor="black"

        formatTextValue={() => getPerformanceLabel(staticValue)}

      />

    </div>

  );

};

export default Dashboard1;