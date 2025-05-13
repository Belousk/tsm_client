import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Landing from "./pages/Landing.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
