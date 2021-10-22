import React, { useEffect, useState } from 'react'
import CountriesContainer from '../../components/countries-container/CountriesContainer'
import FilterCountriesTextInput from '../../components/filter-countries-text-input/FilterCountriesTextInput'
import FilterRegionDropdown from '../../components/filter-region-dropdown/FilterRegionDropdown'
import { extractRegions, filterCountries } from './home-utils'
import { useApp, useAppDispatch } from '../../state'

import './Home.css'

export function HomeCore({
  countries,
  onChangeForCountriesInput,
  onChangeForRegionInput,
  regions,
  valueForFilterCountries,
  valueForFilterRegion
}) {
  const filteredCountries = filterCountries(countries, valueForFilterRegion, valueForFilterCountries)

  return (
    <div className="home">
      <HomeFormControls
        onChangeForCountriesInput={onChangeForCountriesInput}
        onChangeForRegionInput={onChangeForRegionInput}
        optionsForRegionDropdown={regions}
        valueForFilterCountries={valueForFilterCountries}
        valueForFilterRegion={valueForFilterRegion}
      />
      <CountriesContainer countries={filteredCountries}/>
    </div>
  )
}

function HomeFormControls({
  onChangeForCountriesInput,
  onChangeForRegionInput,
  optionsForRegionDropdown,
  valueForFilterCountries,
  valueForFilterRegion
}) {
  return (
    <div className="home-form-controls">
      <FilterCountriesTextInput
        onChange={onChangeForCountriesInput}
        value={valueForFilterCountries}
      />
      <FilterRegionDropdown
        onChange={onChangeForRegionInput}
        options={optionsForRegionDropdown}
        value={valueForFilterRegion}
      />
    </div>
  )
}

export function HomeWrapper() {
  const dispatch = useAppDispatch()
  const { countries, home: { filterRegionValue, filterCountriesValue } } = useApp()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async function() {
      /**
       * HACK: Only fetch once
       * Note: The error below is just logged to the console.  An improvement
       * would be to add the error to the web page for the user to see.
       */
      if (countries.length === 0) {
        try {
          const response = await fetch('https://restcountries.com/v2/all')
          const data = await response.json()
          dispatch({
            type: 'LOAD_COUNTRIES',
            payload: {
              countries: data
            }
          })
        } catch(error) {
          console.log(error)
        }
      }
      setLoading(false)
    })()
  }, [])

  return (
    <>
      {
        !loading && countries.length > 0 ?
          <HomeCore
            countries={countries}
            onChangeForCountriesInput={event => dispatch({ type: 'UPDATE_COUNTRY_FILTER', payload: { countryFilter: event.target.value } })}
            onChangeForRegionInput={event => dispatch({ type: 'UPDATE_REGION_FILTER', payload: { regionFilter: event.target.value } })}
            regions={extractRegions(countries)}
            valueForFilterCountries={filterCountriesValue}
            valueForFilterRegion={filterRegionValue}
          /> :
          <div>loading...</div>
      }
    </>
  )
}