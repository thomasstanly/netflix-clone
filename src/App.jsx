import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {netflix,action} from './urls'

function App() {

  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost url={netflix} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />

    </>
  )
}

export default App
