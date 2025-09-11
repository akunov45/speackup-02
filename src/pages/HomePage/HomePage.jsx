// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="text-center mt-10">
//       <h1 className="text-3xl font-bold">Добро пожаловать на главную страницу!</h1>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Добро пожаловать на главную страницу!</h1>
      
      <Link to="/settings">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Перейти в настройки аккаунта
        </button>
      </Link>
    </div>
  );
};

export default HomePage;

