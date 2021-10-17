import React from 'react'

import './FilterRegionDropdown.css'

export default function FilterRegionDropdown({
  onChange,
  options,
  value
}) {
  return (
    <select value={value} className="filter-region-dropdown" onChange={onChange}>
      <option value={''}>None</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
}