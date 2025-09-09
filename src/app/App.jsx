import { Routes, Route } from 'react-router'
import Layout from '../layout/Layout'
import CoursesPage from '../pages/Courses/CoursesPage'
import HomePage from '../pages/HomePage/HomePage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/courses" element={<CoursesPage/>} />
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>

    </div>
  )
}

export default App