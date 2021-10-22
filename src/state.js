import { useReducer, useContext, createContext } from 'react'

/**
 * @description Module that contains the code associated to the
 * application state
 */

const AppStateContext = createContext()
const AppDispatchContext = createContext()

/**
 * @description Global application reducer that handles a hand full of actions
 */
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_COUNTRIES':
      const { countries } = action.payload
      return {
        ...state,
        countries
      }
    case 'UPDATE_COUNTRY_FILTER':
      const { countryFilter } = action.payload
      return {
        ...state,
        home: {
          ...state.home,
          filterCountriesValue: countryFilter
        }
      }
    case 'UPDATE_REGION_FILTER':
      const { regionFilter } = action.payload
      return {
        ...state,
        home: {
          ...state.home,
          filterRegionValue: regionFilter
        }
      }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

const initialState = {
  countries: [],
  home: {
    filterCountriesValue: '',
    filterRegionValue: ''
  }
}

/**
 * @description Wrapper for using within App.js -- avoids having to import both
 * providers and thus, helps keep low level state code out of app.js (example
 * the amount of dispatchers/reducers used changes)
 */
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}

/**
 * @description Mini hooks that can be imported within the page components;
 * this helps avoid having to import both the context and useContext hook
 * within the components that use it
 */
export const useApp = () => useContext(AppStateContext)
export const useAppDispatch = () => useContext(AppDispatchContext)