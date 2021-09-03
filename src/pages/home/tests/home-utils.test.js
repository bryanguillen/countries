import { extractRegions, filterCountriesByName, filterCountriesByRegion } from '../home-utils'

describe('extractRegions', () => {
  it('should return an array of regions, where each region is unique', () => {
    /**
     * Notice only regions matters to this function, thus that is what
     * is used
     */
    const mockCountries = [
      {
        region: 'Americas'
      },
      {
        region: 'Americas'
      },
      {
        region: 'Europe'
      },
      {
        region: 'Africa'
      },
      {
        region: 'Europe'
      }
    ]
    const regions = extractRegions(mockCountries)
    expect(regions).toEqual(['Americas', 'Europe', 'Africa'])
  })
})

describe('filter functionality', () => {
  /**
   * Notice only properties that matter to fn are included
   */
  const mockCountriesForFilterTests = [
    {
      name: 'United State of America',
      region: 'Americas'
    },
    {
      name: 'Canada',
      region: 'Americas'
    },
    {
      name: 'Cameroon',
      region: 'Africa'
    },
    {
      name: 'Italy',
      region: 'Europe'
    },
    {
      name: 'Kenya',
      region: 'Africa'
    },
    {
      name: 'Spain',
      region: 'Europe'
    }
  ]

  describe('filterCountriesByName', () => {
      it('should return an array of countries filtered with countries that have similar names', () => {
        const countries = filterCountriesByName(mockCountriesForFilterTests, 'ca')
        expect(countries).toEqual([mockCountriesForFilterTests[0], mockCountriesForFilterTests[1], mockCountriesForFilterTests[2]])
      })

      it('should return all countries if no name', () => {
        const countries = filterCountriesByName(mockCountriesForFilterTests, '')
        expect(countries).toEqual([...mockCountriesForFilterTests])
      })
  })
  
  describe('filterCountriesByRegion', () => {
      it('should return an array of countries filtered by region', () => {
        const countries = filterCountriesByRegion(mockCountriesForFilterTests, 'Americas')
        expect(countries).toEqual([mockCountriesForFilterTests[0], mockCountriesForFilterTests[1]])
      })

      it('should return a original array if filtering by "none"', () => {
        const countries = filterCountriesByRegion(mockCountriesForFilterTests, '')
        expect(countries).toEqual([...mockCountriesForFilterTests])
      })
  })
})