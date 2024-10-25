import React from "react";
import { Bubble } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    BubbleController,
    PointElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";

 

  ChartJS.register(
    CategoryScale,
    BubbleController,
    PointElement,
    Title,
    Tooltip,
    Legend
  );

export default function BurbujasDi({ browse }) {

    const options = {};



  return (
    
    <div className="py-5 text-center">
        <Bubble options={options} data={{
    datasets: [{
    label: `${browse.name}`,
    data: [{
      x: `${browse.estimated_diameter.kilometers.estimated_diameter_min}`,
      y: `${browse.estimated_diameter.kilometers.estimated_diameter_max}`,
      r: 15
    }, ],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
}} />;
        
      <h2>Id:{browse.id}</h2>
      <h2>Name:{browse.name}</h2>
      <h2>First Observation:{browse.orbital_data.first_observation_date}</h2>
      <h2>Diameter Min:{browse.estimated_diameter.kilometers.estimated_diameter_min}</h2>
      <h2>Diameter Max:{browse.estimated_diameter.kilometers.estimated_diameter_max}</h2>
    </div>
  );
}
