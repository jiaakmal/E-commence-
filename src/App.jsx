import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import PageNotFound from './pages/notFound/PageNotFound'
import HomePage from './pages/home/HomePage'

const App = () => {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/*" element={<PageNotFound />} />
     </Routes>
   </Router>
  )
}

export default App