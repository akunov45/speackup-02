import { Routes, Route } from 'react-router'
import Layout from '../layout/Layout'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'

function App() {
  // const [count, setCount] = useState(0)

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
          <Route path="/about" element={<h2>About</h2>} />
        </Route>
      </Routes>

    </div>
  )
}

export default App