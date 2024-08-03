import { useState, useEffect, useRef } from "react";
import { UserContext } from "../App";
// booking form
const Form = () => {

    const initialValues = {
        date: '',
        time: '',
        guests: '',
        occasion: ''
    }       

    useEffect(() => {

    }, [])    
    
    const [isAvailable, setAvailable] = useState('')
    const [isDetails, setDetails] = useState(initialValues);





    const handleChange = (field) => {
        setDetails({...isDetails, [field.target.name]: field.target.value})
        console.log(isDetails)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.table(isDetails)
    }

 

// setData(...initialValues, [param.target.name]: param.target.value)
    return (

        <div className="bg-base-100">

            <div className="container max-w-6xl h-auto m-auto justify-center flex flex-col md:flex-row gap-12 ">

                <form onSubmit={handleSubmit} className="flex flex-col max-w-xl w-full gap-12 p-12 shadow rounded-xl shadow-xl border">
                    <h4 className="text-2xl text-center"> Reserve a table </h4>
                    <div className="flex flex-col gap-2 max-w-96 w-full m-auto">
                        <label> Choose time </label>
                        <select className="select select-bordered" htmlFor='res-date' onChange={handleChange} name='time' id='time'>
                            <option> 10:00 am </option>
                            <option> 11:00 am </option>
                            <option> 12:00 pm </option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 max-w-96 w-full m-auto">
                        <label> Number of guests: {isDetails ? isDetails.guests : null} </label>
                        <input type="range" min={1} max={20} className="range" step={1} id="guests" name="guests" onChange={handleChange}/>
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
                        <label> Occasion </label>
                        <select className="select select-bordered" name='occasion' id='occasionc' onChange={handleChange}>
                            <option> Anniversary </option>
                            <option> Birthday </option>
                            <option> N/A </option>
                        </select>                         
                    </div>
                    <input className="btn btn-secondary btn-wide m-auto" type='submit' value='Reserve' id='bookingForm'/>
                    



                    
                </form>

            </div>

        </div>

    )
}

export default Form