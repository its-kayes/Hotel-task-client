import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Hotels from './components/Hotels';
import Review from './components/Review';

function App() {
  return (
    <div>
      <Navbar> </Navbar>
      <Routes>
        <Route path='/' element={<Hotels></Hotels>}> </Route>
        <Route path='/review' element={<Review> </Review>}> </Route>
      </Routes>
      {/* <h1 className='text-4xl text-center'> kaj kore sob </h1> */}
    </div>
  );
}

export default App;
