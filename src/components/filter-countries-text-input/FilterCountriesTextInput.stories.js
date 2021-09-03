import React from 'react'
import FilterCountriesTextInput from './FilterCountriesTextInput'

export default {
  title: 'Components/FilterCountriesTextInput',
  component: FilterCountriesTextInput

}

const Template = args => <FilterCountriesTextInput {...args}/>

export const FilterCountriesTextInputStory = Template.bind({})
FilterCountriesTextInputStory.args = {}