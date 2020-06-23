import React from "react";
import { Pie } from "react-chartjs-2";

export default function Chart({ confirmed, recovered, deaths }) {
  const data = {
    labels: ["Confirmed", "Recovered", "Deaths"],
    datasets: [
      {
        label: "COVID19 Stats",
        data: [confirmed, recovered, deaths],
        backgroundColor: ["#5668E2", "#68E256", "#E25668"],
      },
    ],
  };

  const options = {
    legend: {
      display: true,
      position: "right",
    },
  };
  return (
    <div className="container my-4">
      <Pie data={data} width={400} options={options} />
    </div>
  );
}
