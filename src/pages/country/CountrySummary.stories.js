import React from 'react'
import { CountrySummaryCore as CountrySummary } from './CountrySummary'

export default {
  title: 'Pages/CountrySummary',
  component: CountrySummary
}

const Template = args => <CountrySummary {...args}/>

/**
 * NOTE: Schema is modeled after what is in API -- partially though, since it's missing some object properties 
 */
const mockCountry = {
  name: 'United States of America',
  region: 'Americas',
  population: 350000000,
  capital: 'Washington D.C.',
  flag: 'https://restcountries.eu/data/usa.svg',
  nativeName: 'US',
  subregion: 'North America'
}

export const CountrySummaryStory = Template.bind({})
CountrySummaryStory.args = mockCountry
