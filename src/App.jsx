import React from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom"

import Navbar  from "./components/nav/Navbar"
import Footer from "./components/nav/Footer"
import Landing from "./components/pages/Landing"
import PokeGrid from "./components/pages/PokeGrid"
import Pokedex from "./components/pages/Pokedex"

import { Provider } from 'react-redux'

import generateStore from "./redux/store"

function App() {

  const store = generateStore()

	return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Landing} exact />
        <Provider store={store}>
          <div className="pokedex-background">
            <Route path='/PokeGrid' component={PokeGrid} exact />
            <Route path='/PokeInfo' component={Pokedex} exact />
          </div>
        </Provider>
      </Switch>
      <Footer />
    </Router>
	)
}

export default App
