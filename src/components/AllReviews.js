import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';

const AllReviews = () => {

    let { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://quiet-hamlet-41570.herokuapp.com/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading> </Loading>
    }

    return (
        <div className='my-20'>

            <p className='text-center text-3xl font-mono font-bold my-20 text-rose-400'> Reviews that gives our valuable clients </p>

            <div className='grid grid-cols-3 gap-14 '>
                {
                    reviews.map(review => <div class="card w-96 bg-base-100 shadow-2xl">
                        <figure class="px-10 pt-10">
                            <img src={review?.img} alt="hotel" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-lime-500 font-bold"> {review.name} </h2>
                            <p> <span className='px-2 font-bold text-cyan-500'> Review: </span> {review.review} </p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllReviews; 