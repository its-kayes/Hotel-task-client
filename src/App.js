import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Hotels from './components/Hotels';
import Review from './components/Review';
import PerHotelDetails from './components/PerHotelDetails';
import AllReviews from './components/AllReviews';

function App() {
  return (
    <div>
      <Navbar> </Navbar>
      <Routes>
        <Route path='/' element={<Hotels></Hotels>}> </Route>
        <Route path='/hotel/:id' element={<PerHotelDetails> </PerHotelDetails>}> </Route>
        <Route path='/review/:id' element={<Review> </Review>}> </Route>
        <Route path='all_review' element={<AllReviews></AllReviews>}> </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
