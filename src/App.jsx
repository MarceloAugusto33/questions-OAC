import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Question } from './pages/Question.jsx'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/question' element={<Question />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
