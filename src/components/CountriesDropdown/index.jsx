import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountriesDropdown = function () {
  const [countries, setCountries] = useState([]);

  async function getCountries() {
    try {
      const { data } = await axios('https://countriesnow.space/api/v0.1/countries/currency');
      setCountries(
        data.data.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }),
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (countries.length <= 0) getCountries();
  }, []);

  return (
    <label htmlFor="countries">
      Country or region
      <select id="countries" name="countries">
        {countries.map((country) => <option value={country.name}>{country.name}</option>)}
      </select>
    </label>
  );
};

export default CountriesDropdown;
