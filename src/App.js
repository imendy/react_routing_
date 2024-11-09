
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import ThankYou from './pages/ThankYou';



function App() {





  return (
   <div>
     <Routes>
      <Route 
        path="/"
        element={<h1><HomePage /></h1>}
      />
      <Route 
         path="/form"
         element={<FormPage />}
      />
      <Route 
        path="/thank-you"
        element={<ThankYou />}
      />


     </Routes>
   </div>
  );
}

export default App;