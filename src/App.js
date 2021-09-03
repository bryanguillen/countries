import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { HomeWrapper as Home } from './pages/home/Home'
import { CountrySummaryWrapper as CountrySummary } from './pages/country/CountrySummary'
import NavBar from './components/nav-bar/NavBar'
import AppContext from './app-context'

function App() {
  const [appState, setAppState] = useState({ countries: [] })

  return (
    <Router>
      <AppContext.Provider value={{ appState, setAppState }}>
        <div className="app">
          <NavBar/>
          <Switch>
            <Route component={CountrySummary} path="/country/:name"/>
            <Route component={Home} path="/"/>
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
