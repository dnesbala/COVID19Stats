import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CountryPicker({ countryChangeHandler }) {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get("https://covid19.mathdro.id/api/countries");
        const { countries } = res.data;
        const fetchedCountries = countries.map((country) => country.name);
        setCountryList(fetchedCountries);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, [countryList]);

  return (
    <form className="container">
      <div className="form-group text-center my-5">
        <label htmlFor="country">Select Country</label>
        <select
          className="form-control"
          id="country"
          onChange={countryChangeHandler}
        >
          <option>Global</option>
          {countryList.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </div>
    </form>
  );
}
