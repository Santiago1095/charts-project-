import React from "react";
import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";

 

  ChartJS.register(
    CategoryScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

export default function BarrasDi({ browse }) {

    const options = {};



  return (
    
    <div className="py-5 text-center">
        <Bar options={options} data={{
            labels:[`${browse.name}`],
    datasets: [{
    label: `${browse.name}`,
    data: [
      
      `${browse.estimated_diameter.kilometers.estimated_diameter_max}`,
      
     ],
   backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 205, 189, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
  }]
}} />;
        
      
    </div>
  );
}