import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useApp } from '../../state'

import './CountrySummary.css'

export function CountrySummaryCore({
  flag,
  nativeName,
  population,
  region,
  subregion,
  capital,
  name
}) {
  return (
    <div className="country-summary">
      <div className="country-summary-flag-parent-container">
        <div className="country-summary-flag-container">
          <img src={flag} className="country-summary-flag" alt={`${name} flag`}/>
        </div>
      </div>
      <div className="country-summary-text-container">
        <div className="country-summary-name">{name}</div>
        <div className="country-summary-other-info-container">
          <div className="country-summary-other-info">Native Name: {nativeName}</div>
          <div className="country-summary-other-info">Population: {population}</div>
          <div className="country-summary-other-info">Region: {region}</div>
          <div className="country-summary-other-info">Sub Region: {subregion}</div>
          <div className="country-summary-other-info">Capital: {capital}</div>
        </div>
      </div>
    </div>
  )
}

export function CountrySummaryWrapper() {
  const { countries } = useApp()
  const { name } = useParams()
  const history = useHistory()
  const [countryData, setCountryData] = useState({})
  const [loading, setLoading] = useState()

  useEffect(() => {
    /**
     * Only load if there is country data; redirect to home if there is no data
     */
    if (countries.length === 0) {
      return history.push('/')
    } else {
      /**
       * Assume country exists for now
       */
      setCountryData(countries.find(country => country.name.trim() === name))
      setLoading(false)
    }
  }, [])

  return (
    <>
      {!loading ?
          <CountrySummaryCore
            flag={countryData.flag}
            nativeName={countryData.nativeName}
            population={countryData.population.toLocaleString('en-us')}
            region={countryData.region}
            subregion={countryData.subregion}
            capital={countryData.capital}
            name={countryData.name}
          /> :
          <div>loading...</div>
      }
    </>
  )
}