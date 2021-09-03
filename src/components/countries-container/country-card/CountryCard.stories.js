import React from 'react'
import CountryCard from './CountryCard'

export default {
  title: 'Components/CountryCard',
  component: CountryCard
}

const Template = args => <CountryCard {...args}/>

export const CountryCardStory = Template.bind({})
CountryCardStory.args = {
  capital: 'Washington D.C.',
  flag: 'https://restcountries.eu/data/usa.svg',
  name: 'United States of America',
  population: 335000000,
  region: 'America'
}