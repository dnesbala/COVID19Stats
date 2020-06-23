import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryPicker from "./CountryPicker";
import Chart from "./Chart";
import Stats from "./Stats";

export default function Homepage() {
  let API_URL = "https://covid19.mathdro.id/api";
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [isGlobal, setIsGlobal] = useState(true);
  const [country, setCountry] = useState();

  if (!isGlobal)
    API_URL = `https://covid19.mathdro.id/api/countries/${country}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(API_URL);
      const { confirmed, recovered, deaths } = res.data;
      setConfirmed(confirmed.value);
      setRecovered(recovered.value);
      setDeaths(deaths.value);
    };
    fetchData();
  });

  const countryChangeHandler = (e) => {
    const selectedCountry = e.target.value;
    selectedCountry === "Global" ? setIsGlobal(true) : setIsGlobal(false);
    setCountry(selectedCountry);
  };

  return (
    <div className="container">
      <Stats
        isGlobal={isGlobal}
        country={country}
        confirmed={confirmed}
        recovered={recovered}
        deaths={deaths}
      />
      <CountryPicker countryChangeHandler={countryChangeHandler} />
      <Chart confirmed={confirmed} recovered={recovered} deaths={deaths} />
    </div>
  );
}
