import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/home.jsx'

export function App() {
  return (
    <Router>
      <main className="main-app">
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </main>
    </Router>
  )
}
