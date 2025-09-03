

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import Home from "./pages/home";


// const App = () => {
//   return (
//     <>
//       {/* Toast container for react-toastify */}
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}   // auto dismiss after 3s
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         pauseOnHover
//         draggable
//         theme="colored"   // options: light, dark, colored
//       />

//       {/* App routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />

//       </Routes>
//     </>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ needed for toast styles
import Home from "./pages/home.jsx";

const App = () => {
  return (
    <>
      {/* Toast container for react-toastify */}
      <ToastContainer
        position="top-right"
        autoClose={3000}   // auto dismiss after 3s
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"   // options: light | dark | colored
      />

      {/* App routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
