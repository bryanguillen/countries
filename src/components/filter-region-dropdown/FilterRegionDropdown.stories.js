import React from 'react'
import FilterRegionDropdown from './FilterRegionDropdown'

export default {
  title: 'Components/FilterRegionDropdown',
  component: FilterRegionDropdown
}

const Template = args => <FilterRegionDropdown {...args}/>

export const FilterRegionDropdownStory = Template.bind({})
FilterRegionDropdownStory.args = {
  options: [
    'America',
    'Europe',
    'Africa'
  ]
}