import { RouterWrapper } from "./components/RouterWrapper/RouterWrapper"
import { CharactersPage } from "./pages/CharactersPage/CharactersPage"
import { LandingPage } from "./pages/LandingPage/LandingPage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='' element={<RouterWrapper/>}>
          <Route path='/characters' element={<CharactersPage/>}/>
        </Route>
      </Routes>
    </Router>
  
  )
}

export default App
