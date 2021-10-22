import React from 'react'
import CountriesContainer from './CountriesContainer'

export default {
  title: 'Components/CountriesContainer',
  component: CountriesContainer
}

const Template = args => <CountriesContainer {...args}/>

// used multiple times for simplicity
const mockCountry = {
  capital: 'Washington D.C.',
  flag: 'https://flagcdn.com/us.svg',
  name: 'United States of America',
  population: 335000000,
  region: 'America'
};

export const CountriesContainerStory = Template.bind({})
CountriesContainerStory.args = {
  countries: [
    mockCountry,
    mockCountry,
    mockCountry,
    mockCountry,
    mockCountry
  ]
}