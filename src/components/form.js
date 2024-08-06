import { useState, useEffect, useRef } from "react";
import { UserContext } from "../App";
import Toast from "./toast";
import { json } from "react-router-dom";
// booking form
const Form = () => {
    
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    const fetchAPI = function(date) {
        let result = [];
        console.log(date)
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        setAvailable(result);
    };
    const submitAPI = function(e) { 
        e.preventDefault()
        localStorage.setItem("Reservation", JSON.stringify(isDetails))
        const storage = localStorage.getItem("Reservation")
        console.log(storage, isDetails)
        setToast({ message: 'Form submitted successfully', type: 'success'})
        setTimeout(() => {
            setToast({ message: '', type: ''})
        }, 5000)
    };

    const initialValues = {
        date: '',
        time: '',
        guests: '',
        occasion: ''
    }       

    useEffect(() => {
        const today = new Date
        fetchAPI(today)
    }, [])    
    
    const [isAvailable, setAvailable] = useState([])
    const [isDetails, setDetails] = useState(initialValues);
    const [isToast, setToast] = useState({ message: '', type: ''})


    const handleChange = (field) => {
        setDetails({...isDetails, [field.target.name]: field.target.value})
    }

    return (

        <div className="bg-base-100" id="bookingForm">
            <Toast message={isToast.message} type={isToast.type} onclose={() => setToast({message: '', type: ''})} />


            <div className="container max-w-6xl h-auto m-auto justify-center flex flex-col md:flex-row gap-12 ">
                <form onSubmit={submitAPI} className="flex flex-col max-w-xl w-full gap-8 p-12 rounded-xl shadow-xl m-auto">
                    <h4 className="text-2xl text-center heading-font"> Reserve a table </h4>
                   
                    <div className="flex flex-col gap-2 max-w-96 w-full m-auto">
                        <label htmlFor='date'> Choose a day </label>
                        <input type="date" className="input input-bordered" htmlFor='res-date' onChange={handleChange} name='date' id='date' required/>
                         
                    </div>
                    <div className="flex flex-col gap-2 max-w-96 w-full m-auto">
                        <label htmlFor='time'> Choose a time </label>
                        <select className="select select-bordered" htmlFor='res-date' onChange={handleChange} name='time' id='time' required>
                            { isAvailable ? isAvailable.map((date) => <option> {date} </option>) : <option> No times available for this day </option> }
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 max-w-96 w-full m-auto">
                        <label> Number of guests: {isDetails ? isDetails.guests : null} </label>
                        <input type="range" min={1} max={20} className="range" step={1} id="guests" name="guests" onChange={handleChange} required/>
                            <div className="flex w-full justify-between px-2 text-xs">
                            <span>1</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>20</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 max-w-96 w-full m-auto">
                        <label> What's the occasion? </label>
                        <select className="select select-bordered" name='occasion' id='occasionc' onChange={handleChange} required>
                            <option> Anniversary </option>
                            <option> Birthday </option>
                            <option> Date </option>
                            <option> Birthday </option>
                            <option> Meeting </option>
                            <option> Proposal </option>
                            <option> N/A </option>
                        </select>                         
                    </div>
                    <input className="btn btn-secondary btn-wide m-auto" type='submit' value='Reserve' id='bookingForm' data-testid="bookingForm-input"/>
                    
                </form>
            </div>

        </div>

    )
}

export default Form