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
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  useEffect(() => {
    if (!countries.length) getCountries();
  }, []);

  return (
    <div className="form-group">
      <div className="form-row">
        <label htmlFor="countries">
          Country or region
          <select id="countries" className="form-control top" name="countries">
            {countries.map((country) => (
              <option value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="ZIP">
          <input type="text" className="form-control bottom" placeholder="ZIP" />
        </label>
      </div>
    </div>
  );
};

export default CountriesDropdown;
