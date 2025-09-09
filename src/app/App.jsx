import { Routes, Route } from 'react-router'
import Layout from '../layout/Layout'
import HomePage from '../pages/HomePage/HomePage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout /> } >
          <Route index element={<HomePage/>} />
          <Route path="/about" element={<h2>About</h2>} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
