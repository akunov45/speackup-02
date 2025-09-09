import { Routes, Route } from 'react-router'
import Layout from '../layout/Layout'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import HomePage from '../pages/HomePage/HomePage'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>

    </div>
  )
}

export default App