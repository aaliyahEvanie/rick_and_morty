import { RouterWrapper } from "./components/RouterWrapper/RouterWrapper"
import { LandingPage } from "./pages/LandingPage/LandingPage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/adventure' element={<RouterWrapper/>}/>
        
      </Routes>
    </Router>
  
  )
}

export default App
