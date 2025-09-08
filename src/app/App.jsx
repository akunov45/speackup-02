import { Routes, Route } from 'react-router'
import Layout from '../layout/Layout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
