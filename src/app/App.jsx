
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from '../pages/HomePage/HomePage';
import AccountSettings from '../pages/AccountSettings/AccountSettings'; 
import HomePage from '../pages/HomePage/HomePage';
import SignUp from '../pages/AccountSettings/SignUp';
import ResPass from '../pages/AccountSettings/ResPass';
import NewPass from '../pages/AccountSettings/NewPass';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<AccountSettings />} /> 
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/respass' element={<ResPass/>}/>
        <Route path='/newpass' element={<NewPass/>}/>
      </Routes>
    </Router>
  );
};

// {errorMessage && (
//   <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
//     {errorMessage}
//   </div>
// )}


export default App;
