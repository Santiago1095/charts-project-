import React from "react";
import { Bubble } from "react-chartjs-2";

export default function BurbujasDi({ data,  }) {
  const options = {
    maintainAspectRatio: true,
    normalized: false,
    responsive: true,
    scales: {},
    legend: {
      labels: {
        fontSize: 100,
      },
    },
  };
  const chartData = {
    datasets: [
      {
        label: "Asteroids",
        data: data,
        fill: true,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  if (data.lenght === 0) {
    return <div>loading</div>;
  }

  return (
    <div className="py-1 text-center">
      <Bubble options={options} data={chartData} className="bg-white py-4"/>
    </div>
  );
}
