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
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title"> {hotel.name} </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Hotels;