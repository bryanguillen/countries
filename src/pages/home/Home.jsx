import React, { useContext, useEffect, useState } from 'react'
import CountriesContainer from '../../components/countries-container/CountriesContainer'
import FilterCountriesTextInput from '../../components/filter-countries-text-input/FilterCountriesTextInput'
import FilterRegionDropdown from '../../components/filter-region-dropdown/FilterRegionDropdown'
import { extractRegions, filterCountries } from './home-utils'
import AppContext from '../../app-context'

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
      />
      <CountriesContainer countries={filteredCountries}/>
    </div>
  )
}

function HomeFormControls({
  onChangeForCountriesInput,
  onChangeForRegionInput,
  optionsForRegionDropdown,
  valueForFilterCountries
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
      />
    </div>
  )
}

export function HomeWrapper() {
  const { appState, setAppState } = useContext(AppContext)
  const [filterCountriesValue, setFilterCountriesValue] = useState('')
  const [filterRegionValue, setFilterRegionsValue] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async function() {
      /**
       * HACK: Only fetch once
       */
      if (appState.countries.length === 0) {
        const response = await fetch('https://restcountries.com/v2/all')
        const data = await response.json()
        setAppState({ countries: data })
      }
      setLoading(false)
    })()
  }, [])

  return (
    <>
      {
        !loading && appState.countries.length > 0 ?
          <HomeCore
            countries={appState.countries}
            onChangeForCountriesInput={event => setFilterCountriesValue(event.target.value)}
            onChangeForRegionInput={event => setFilterRegionsValue(event.target.value)}
            regions={extractRegions(appState.countries)}
            valueForFilterCountries={filterCountriesValue}
            valueForFilterRegion={filterRegionValue}
          /> :
          <div>loading...</div>
      }
    </>
  )
}