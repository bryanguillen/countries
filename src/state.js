import { useReducer, useContext, createContext } from 'react'

/**
 * @description Module that contains the code associated to the
 * application state
 */

const AppStateContext = createContext()
const AppDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_COUNTRIES':
      const { countries } = action.payload
      return {
        ...state,
        countries
      }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const AppProvider = ({ initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}

export const useApp = () => useContext(AppStateContext)
export const useAppDispatch = () => useContext(AppDispatchContext)