import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import CurrencyConverter from './pages/CurrencyConverter'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CurrencyConverter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
