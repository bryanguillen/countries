import React from 'react'

import './FilterRegionDropdown.css'

export default function FilterRegionDropdown({
  onChange,
  options
}) {
  return (
    <select className="filter-region-dropdown" onChange={onChange}>
      <option defaultValue value={''}>None</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
}