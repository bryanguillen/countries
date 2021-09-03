import React from 'react'
import CountryCard from './country-card/CountryCard'
import { useHistory } from 'react-router-dom'

import './CountriesContainer.css'

export default function CountriesContainer({
  countries
}) {
  const history = useHistory()

  return (
    <div className="countries-container">
      {countries.map((country, index) => (
        <div key={index} className="country-card-wrapper">
          <CountryCard
            capital={country.capital}
            flag={country.flag}
            name={country.name}
            onClick={() => history.push(`/country/${country.name}`)}
            population={country.population}
            region={country.region}
          />
        </div>
      ))}
    </div>
  );
}