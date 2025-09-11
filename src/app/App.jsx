
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AccountSettings from '../pages/AccountSettings/AccountSettings';
import HomePage from '../pages/HomePage/HomePage';
import SignUp from '../pages/AccountSettings/SignUp';
import ResPass from '../pages/AccountSettings/ResPass';
import NewPass from '../pages/AccountSettings/NewPass';
import Layout from '../layout/Layout'
import TestPage from '../pages/TestPage/TestPage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import CoursesPage from '../pages/Courses/CoursesPage'





const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/settings" element={<AccountSettings />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/respass' element={<ResPass />} />
          <Route path='/newpass' element={<NewPass />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
