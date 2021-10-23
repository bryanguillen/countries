import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

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
        <LazyLoadImage
          alt={`${name} flag`}
          className="country-card-flag"
          effect="blur"
          src={flag}
        />
      </div>
      <div className="country-card-info-container">
        <div className="country-card-country-name">{name}</div>
        <div className="country-card-data-container">
          <div><span className="country-card-data-text-bold">Population: </span>{population.toLocaleString('en-us')}</div>
          <div><span className="country-card-data-text-bold">Region: </span>{region}</div>
          <div><span className="country-card-data-text-bold">Capital: </span>{capital}</div>
        </div>
      </div>
    </div>
  )
}