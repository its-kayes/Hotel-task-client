import React from 'react';

const Review = () => {
    return (
        <div>
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
                                <input type="text" placeholder="Hotel Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Details</span>
                                </label>
                                <input type="text" placeholder="Your Review" class="input input-bordered" />
                                
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;