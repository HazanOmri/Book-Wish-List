import { Route, Router, Routes } from "react-router-dom"
import { bookService } from "./services/book.service"

export function App() {
  return (
    <Router>
      <main className="main-app">
        <Routes>
          <Route element={BookIndex} path={'/'} />
        </Routes>
      </main>
    // </Router>
  )
}
