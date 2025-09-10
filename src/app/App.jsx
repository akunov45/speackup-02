import { Routes, Route } from 'react-router'
import Layout from '../layout/Layout'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import CoursesPage from '../pages/Courses/CoursesPage'
import HomePage from '../pages/HomePage/HomePage'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/courses" element={<CoursesPage/>} />
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App