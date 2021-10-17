import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { HomeWrapper as Home } from './pages/home/Home'
import { CountrySummaryWrapper as CountrySummary } from './pages/country/CountrySummary'
import NavBar from './components/nav-bar/NavBar'
import { AppProvider } from './state'

function App() {
  const initialState = {
    countries: [],
    home: {
      filterCountriesValue: '',
      filterRegionValue: ''
    }
  }

  return (
    <Router>
      <AppProvider initialState={initialState}>
        <div className="app">
          <NavBar/>
          <Switch>
            <Route component={CountrySummary} path="/country/:name"/>
            <Route component={Home} path="/"/>
          </Switch>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
