import React from "react";
import CountUp from "react-countup";

export default function StatsCard({ title, value, bgColor }) {
  return (
    <div className="col-10 col-md-4 mx-auto mb-2">
      <div className={`card ${bgColor} text-white text-center p-3`}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <h4>
            <CountUp start={0} end={value} separator="," duration={2} />
          </h4>
        </div>
      </div>
    </div>
  );
}
