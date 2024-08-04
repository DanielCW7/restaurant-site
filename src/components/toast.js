import { useState } from "react"

const Toast = ({message, type, onclose}) => {

    if(!message) return null
    
    return (
        <div className='toast toast-center toast-top'>
            <div className={`alert alert-${type}`}>
                <span className="" onClick={onclose}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </span>
                <span className="text-white"> {message} </span>
            </div>
        </div> 
    )
}

export default Toast