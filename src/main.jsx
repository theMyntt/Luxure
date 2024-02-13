import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import Masterpage from './pages/Masterpage'
import Err404 from './pages/Err/404'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Masterpage />
    <Router />
  </React.StrictMode>,
)
