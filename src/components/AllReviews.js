import React from 'react';
import { useQuery } from 'react-query';

const AllReviews = () => {

    let {data: reviews } = useQuery('reviews', ()=> fetch('http://localhost:5000/reviews').then(res => res.json()))

    return (
        <div>
            {
                reviews.map(review => <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={review?.img} alt="hotel" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title"> {review.name} </h2>
                    <p> {review.review} </p>
                    {/* <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>)
            }
        </div>
    );
};

export default AllReviews; 