import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Hotels = () => {

    let navigate = useNavigate();

    let { data: hotels, isLoading, refetch } = useQuery('hotels', () => fetch('https://quiet-hamlet-41570.herokuapp.com/hotels').then(res => res.json()));

    if (isLoading) {
        return <Loading> </Loading>
    }

    let details = (id) => {
        navigate(`/hotel/${id}`);
        console.log(id);
    }
    let review = (id) => {
        navigate(`/review/${id}`);
        console.log(id);
    }

    return (
        <div className='w-full flex justify-center'>
            <div className=' grid grid-cols-3 gap-14 my-20'>
                {
                    hotels.map(hotel => <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={hotel.img} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-sky-700 font-bold"> {hotel.name} </h2>
                            <p className='my-2 font-semibold'> {hotel.location} </p>
                            <p> {hotel.about} </p>
                            <p className='text-red-600 font-semibold'> Per Day Cost: {hotel.cost} </p>
                            <div class="card-actions justify-between">
                                <button onClick={() => review(hotel._id)} class=" border-2 py-2 px-4 border-green-600 rounded-xl font-bold text-sky-700 "> Give Review </button>
                                <button onClick={() => details(hotel._id)} class=" border-2 py-2 px-4 border-green-600 rounded-xl font-bold text-sky-700 "> Details </button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Hotels;