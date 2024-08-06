import rest2 from "../images/restaurant_2.jpg"
import rest3 from "../images/restaurant_3.jpg"
import rest4 from "../images/restaurant_4.jpg"

import { useEffect, useState } from "react"

const Process = () => {
 
    
    useEffect(() => {

    }, [])

    return (
        <section className="bg-accent">
            <div className="container flex-col md:flex-row flex max-w-6xl m-auto gap-8 p-">
                <div className="flex flex-col flex-1 justify-center">
                    <h2 className="heading-font text-3xl text-center"> How it works </h2>                    
                    <div className="flex gap-6 border-dotted border-b-4 border-primary p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="max-w-12 stroke-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
 
                        <div>
                            <span className="heading-font text-xl"> 1. Find a space </span> 
                            <p> Filter through a broad array of nearby options based on price, location, and popularity.</p>                            
                        </div>
                    </div>
                    
                    <div className="flex gap-6 border-dotted border-b-4 border-primary p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="max-w-12 stroke-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

 
                        <div>
                            <span className="heading-font text-xl"> 2. Enter details </span> 
                            <p> Provide details on party size, occasion, and preferred date.</p>                            
                        </div>
                    </div>

                    <div className="flex gap-6 p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="max-w-12 stroke-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>

 
                        <div>
                            <span className="heading-font text-xl"> 3. Reserve </span> 
                            <p> Confirm your reservation and you're all set!</p>                            
                        </div>
                    </div>
                </div>   

                <div className="flex-1 m-auto max-w-sm lg:max-w-md rounded-2xl overflow-hidden">
                    <div className="flex-1 m-auto carousel max-w-sm lg:max-w-md">
                        
                        <div id="slide1" className="card carousel-item relative w-full bg-base-100 shadow-lg">
                            <figure>
                                <img src={rest4} alt="The Wok restaurant dining area" />
                            </figure>
                            <div className="card-body">
                                <div className="rating">
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled/>
                                </div>                            
                                <h3 className="card-title"> The Wok Shop </h3>
                                <p> This location specializes in East Asian cuisine, serving lunch and dinner on weekdays day. </p>
                                <div className="flex flex-wrap gap-2">
                                <div className="badge badge-lg p-4 gap-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        Nearby 
                                    </div>
                                    <div className="badge badge-lg p-4 gap-2"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                        Cozy
                                    </div>                                                         
                                    <div className="badge badge-lg p-4 gap-2"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                        </svg>
                                        Highly Rated
                                    </div>
                                    <div className="badge badge-lg p-4 gap-2"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        Affordable
                                    </div>  
                                </div>
                            </div>

                        </div>
                        <div id="slide2" className="card carousel-item relative w-full bg-base-100 shadow-lg">
                            <figure>
                                <img src={rest3} alt="Chino's restaurant dining area" />
                            </figure>
                            <div className="card-body">
                                <div className="rating">
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled/>
                                </div>                            
                                <h3 className="card-title"> Chino's </h3>
                                <p> This location serves primarily American cuisine, and is open for dinner each day. </p>
                                <div className="flex flex-wrap gap-2">
                                <div className="badge badge-lg p-4 gap-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        Nearby 
                                    </div>
                                    <div className="badge badge-lg p-4 gap-2"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                        </svg>
                                        Highly Rated
                                    </div>
                                    <div className="badge badge-lg p-4 gap-2"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        Romantic
                                    </div>                                                        
                                </div>
                            </div>

                        </div>
                        <div id="slide3" className="card carousel-item relative w-full bg-base-100 shadow-lg">
                            <figure>
                                <img src={rest2} alt="The Diner restaurant dining area" />
                            </figure>
                            <div className="card-body">
                                <div className="rating">
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                    <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled/>
                                </div>                            
                                <h3 className="card-title"> The Diner </h3>
                                <p> This location specializes in American cuisine, serving breakfast, lunch, and dinner each day. </p>
                                <div className="flex flex-wrap gap-2">
                                <div className="badge badge-lg p-4 gap-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        Nearby 
                                    </div>
                                    <div className="badge badge-lg p-4 gap-2"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        Affordable
                                    </div>                            
                                    <div className="badge badge-lg p-4 gap-2"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                        </svg>
                                        Trending
                                    </div>                              
                                    <div className="badge badge-lg p-4 gap-2"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        Open Late
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        
                        
                    </div>
                    <div className="flex w-full justify-center gap-2 py-2">
                        <a href="#slide1" className="btn btn-xs rounded-full">1</a>
                        <a href="#slide2" className="btn btn-xs rounded-full">2</a>
                        <a href="#slide3" className="btn btn-xs rounded-full">3</a>
                    </div>                    
                </div>              

               
            </div>

        </section>
    )
}

export default Process