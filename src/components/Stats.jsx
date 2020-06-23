import React from "react";
import StatsCard from "./StatsCard";

export default function Stats({
  isGlobal,
  country,
  confirmed,
  recovered,
  deaths,
}) {
  return (
    <div>
      <h3 className="text-center text-muted my-4">
        {isGlobal ? "Corona Global Stats" : `Corona Stats for ${country}`}
      </h3>
      <div className="row">
        <StatsCard title="Confirmed" value={confirmed} bgColor="bg-primary" />
        <StatsCard title="Recovered" value={recovered} bgColor="bg-success" />
        <StatsCard title="Deaths" value={deaths} bgColor="bg-danger" />
      </div>
    </div>
  );
}
