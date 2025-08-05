import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import CurrencyConverter from './pages/CurrencyConverter'
import { Helmet } from 'react-helmet';


function App() {

  return (
    <>
      <Helmet>
        <title>Currency Converter - Dhruv Akbari</title>
          <meta name="description" content="Currency Converter app by Dhruv Akbari. Easily convert currencies from around the world with live exchange rates." />
          <meta name="keywords" content="currency converter, exchange rates, Dhruv Akbari, financial app, money conversion" />
          <meta name="author" content="Dhruv Akbari" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://convertcurrencies.vercel.app/" />
          <meta property="og:title" content="Currency Converter - Dhruv Akbari" />
          <meta property="og:description" content="Currency Converter app by Dhruv Akbari. Easily convert currencies from around the world with live exchange rates." />
          <meta property="og:image" content="https://dhruvakbari.vercel.app/images/currency-converter.png" />
          <meta property="og:url" content="https://convertcurrencies.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Currency Converter - Dhruv Akbari" />
          <meta name="twitter:description" content="Currency Converter app by Dhruv Akbari. Easily convert currencies from around the world with live exchange rates." />
          <meta name="twitter:site" content="@dhruvakbari" />
          <meta name="twitter:creator" content="@dhruvakbari" />
      </Helmet>
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
