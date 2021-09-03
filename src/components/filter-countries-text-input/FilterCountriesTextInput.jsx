import React from 'react'

import './FilterCountriesTextInput.css'

export default function FilterCountriesTextInput
({
  onChange,
  value
}) {
  return (
    <div className="filter-countries-text-input-container">
      <label className="filter-countries-text-label" htmlFor="filter-countries-text-input">Filter Text Input</label>
      <input className="filter-countries-text-input" id="filter-countries-text-input" name="filter-countries-text-input" onChange={onChange} value={value} placeholder="e.g. Brazil"/>
    </div>
  )
}