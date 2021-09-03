/**
 * @description Function used to extract the regions out of
 * an array of countries, for the filter regions control
 * @param {Array<Object>} countries (from API)
 * @returns {Array<String>}
 */
export function extractRegions(countries) {
  const regions = countries.map(country => country.region)
  return [...new Set(regions)].filter(region => region !== '')
}

/**
 * @description Function used to get the "filtered" version of
 * a countries array, where the filter can be applied by the user;
 * this is essentially a wrapper for calling both filter by country
 * and region
 * @param {Array<Object>} countries (from API)
 * @param {String} regionFilter
 * @param {String} nameFilter
 * @returns {Array<Object>}
 */
export function filterCountries(countries, regionsFilter = '', nameFilter = '') {
  const filteredByRegions = filterCountriesByRegion(countries, regionsFilter)
  return filterCountriesByName(filteredByRegions, nameFilter)
}

/**
 * @description Function used to filter countries by region
 * @param {Array<Object>} countries (from API)
 * @param {String} nameFilter
 * @returns {Array<Object>}
 */
export function filterCountriesByName(countries, nameFilter = '') {
  // Normalize to ensure proper comparison 
  const lowerCasedNameFilter = nameFilter.toLowerCase() 
  return nameFilter.trim() !== '' ? countries.filter(country => country.name.toLowerCase().includes(lowerCasedNameFilter)) : countries
}

/**
 * @description Function used to filter countries by region
 * @param {Array<Object>} countries (from API)
 * @param {String} regionFilter
 * @returns {Array<Object>}
 */
export function filterCountriesByRegion(countries, regionFilter) {
  return regionFilter !== '' ? countries.filter(country => country.region === regionFilter) : countries
}