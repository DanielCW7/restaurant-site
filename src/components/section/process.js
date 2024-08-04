import rest2 from "../images/restaurant_2.jpg"
import { useEffect, useState } from "react"

const Process = () => {
 
    
    useEffect(() => {

    }, [])




    return (
        <section className="bg-accent">
            <div className="container flex-col md:flex-row flex max-w-6xl m-auto gap-8 p-">
                <div className="flex-1 m-auto carousel max-w-sm lg:max-w-md">
                    
                    <div id="slide1" className="card carousel-item relative w-full bg-base-100 shadow-lg">
                        <figure>
                            <img src={rest2} className=""/>
                        </figure>
                        <div className="card-body">
                            <div className="rating">
                                <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled/>
                            </div>                            
                            <h3 className="card-title"> The First </h3>
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
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                    Accepts Reservations
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="slide2" className="card carousel-item relative w-full bg-base-100 shadow-lg">
                        <figure>
                            <img src={rest2} className=""/>
                        </figure>
                        <div className="card-body">
                            <div className="rating">
                                <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled checked/>
                                <input type='radio' name="rating-1" className="bg-yellow-500 mask mask-star" disabled/>
                            </div>                            
                            <h3 className="card-title"> The Second </h3>
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
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                    Accepts Reservations
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="slide3" className="card carousel-item relative w-full bg-base-100 shadow-lg">
                        <figure>
                            <img src={rest2} className=""/>
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
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                    Accepts Reservations
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    
                </div>
                
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
            </div>

        </section>
    )
}

export default Process