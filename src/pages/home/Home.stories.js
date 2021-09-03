import React from 'react'
import { HomeCore as Home } from './Home'

export default {
  title: 'Pages/Home',
  component: Home
}

const Template = args => <Home {...args}/>

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

export const HomeStory = Template.bind({})
HomeStory.args = {
  countries: [
    mockCountry,
    mockCountry,
    mockCountry,
    mockCountry,
    mockCountry
  ],
  regions: ['Americas']
}
