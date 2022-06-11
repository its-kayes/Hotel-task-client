import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';

const Hotels = () => {

    let { data: hotels, isLoading, refetch } = useQuery('hotels', () => fetch('http://localhost:5000/hotels').then(res => res.json()));

    // http://localhost:5000/hotels
    if (isLoading) {
        return <Loading> </Loading>
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
                            <div class="card-actions justify-between">
                                <p className='text-red-600 font-semibold'> Per Day Cost: {hotel.cost} </p>
                                <button class=" border-2 py-2 px-4 border-green-600 rounded-xl font-bold text-sky-700 "> Details </button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Hotels;