import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import {LikedBookPreview} from './cmps/liked-book-preview.jsx'

export function App() {
  return (
    <Router>
      <main className="main-app">
        <Routes>
          <Route element={<LikedBookPreview/>} path='/' />
        </Routes>
      </main>
    </Router>
  )
}
