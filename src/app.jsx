import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { LikedBookPreview } from './cmps/liked-book-preview.jsx'
import { WishList } from './pages/wish-list.jsx'

export function App() {
  return (
    <Router>
      <main className="main-app">
        <Routes>
          <Route element={<WishList />} path='/' />
        </Routes>
      </main>
    </Router>
  )
}
