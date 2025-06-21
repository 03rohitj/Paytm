import { useState } from 'react';
import { Signup } from './pages/Signup';

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin';
import { Dashboard } from './pages/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} /> */}
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>

      
    </BrowserRouter>
  )
}

export default App
