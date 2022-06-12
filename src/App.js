import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Hotels from './components/Hotels';
import Review from './components/Review';
import PerHotelDetails from './components/PerHotelDetails';

function App() {
  return (
    <div>
      <Navbar> </Navbar>
      <Routes>
        <Route path='/' element={<Hotels></Hotels>}> </Route>
        <Route path='/hotel/:id' element={<PerHotelDetails> </PerHotelDetails>}> </Route>
        <Route path='/review/:id' element={<Review> </Review>}> </Route>
        {/* <Route path='/review' element={<Review> </Review>}> </Route> */}
      </Routes>
      {/* <h1 className='text-4xl text-center'> kaj kore sob </h1> */}
      <ToastContainer />
    </div>
  );
}

export default App;
