import { Router } from 'preact-router'

import Home from '../routes/home/index'
import '../global-style.module.css'

const App = () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export default App
