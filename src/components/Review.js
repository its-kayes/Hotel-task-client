import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { toast } from 'react-toastify';
const Review = () => {

    let { id } = useParams();

    let { data: hotel, isLoading, refetch } = useQuery('hotel', () => fetch(`https://quiet-hamlet-41570.herokuapp.com/hotel/${id}`).then(res => res.json()));

    if (isLoading) {
        return <Loading> </Loading>
    }

    let reviewSubmit = (event) => {
        event.preventDefault();
        let img = hotel.img;
        let name = hotel.name;
        let review = event.target.review.value;
        let data = {
            name,
            img,
            review
        }
        console.log(data);

        fetch('https://quiet-hamlet-41570.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(' Your review are added  ')
            })
        event.target.reset();
    }

    return (
        <div>
            <form onSubmit={reviewSubmit} >
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left">
                            <h1 class="text-4xl font-bold">REVIEW US</h1>
                            <p class="py-6 capitalize">Please give your valuable review. It Help us a lot. </p>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Hotel Name</span>
                                    </label>
                                    <input type="text" disabled placeholder="Hotel Name" value={hotel.name} class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Details</span>
                                    </label>
                                    <input type="text" name='review' placeholder="Your Review" class="input input-bordered" />
                                </div>

                                <div class="form-control mt-6">
                                    <button type='submit' class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Review;