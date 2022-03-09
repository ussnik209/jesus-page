import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"

// import Layout from './components/Layout.jsx'
import AppBarContainer from './containers/AppBarContainer'
import UpdatingMenu from './containers/MenuContainer'
import Homepage from './components/Homepage.jsx'
import OrderBasket from './containers/BasketContainer'
import store from './store/Store'

class PizzaApp extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }
 
  render() {
    return (
    <Provider store={store}>
      <Routes>
        <Route path="" element={<AppBarContainer />}>
          <Route index element={<Homepage />}/>
          <Route path="menu" element={<UpdatingMenu />}/>
          <Route path="basket" element={<OrderBasket />}/>
        </Route>
      </Routes>
    </Provider>
    )
  }
}

export default PizzaApp