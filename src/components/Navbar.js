import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='flex justify-around py-5 bg-slate-700'>
            <Link to='/' className='py-2 px-4 rounded-lg border border-yellow-200 text-white font-bold'>All Hotels</Link>
            <Link to='/all_review' className='py-2 px-4 rounded-lg border border-yellow-200 text-white font-bold'>All Reviews</Link>
        </div>
    );
};

export default Navbar;