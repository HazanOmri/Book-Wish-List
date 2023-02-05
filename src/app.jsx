import { Route, HashRouter as Router, Routes } from "react-router-dom"
import { BookIndex } from "./pages/book-index"

export function App() {
  return (
    <Router>
      <main className="main-app">
        <Routes>
          <Route element={<BookIndex/>} path="/" />
        </Routes>
      </main>
    </Router>
  )
}
