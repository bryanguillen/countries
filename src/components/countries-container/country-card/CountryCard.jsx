import React from 'react'

import './CountryCard.css'

export default function CountryCard({
  capital,
  flag,
  name,
  onClick,
  population,
  region
}) {
  return (
    <div className="country-card" onClick={onClick}>
      <div className="country-card-flag-container">
        <img className="country-card-flag" src={flag} alt={`${name} flag`}/>
      </div>
      <div className="country-card-info-container">
        <div className="country-card-country-name">{name}</div>
        <div className="country-card-data-container">
          <div><span className="country-card-data-text-bold">Population: </span>{population}</div>
          <div><span className="country-card-data-text-bold">Region: </span>{region}</div>
          <div><span className="country-card-data-text-bold">Capital: </span>{capital}</div>
        </div>
      </div>
    </div>
  )
}