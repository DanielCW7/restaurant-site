import restaurant from "../images/restaurant.jpg"

const Hero = () => {
    return (
        <div className="min-h-96 bg-cover flex" style={{backgroundImage: `url(${restaurant})`}}>
            <header className="container max-w-6xl flex h-auto m-auto">
                <div className="flex-1 text-white">
                    <h1 className="text-5xl font-black heading-font">The Little Lemon</h1>
                    <p> Check out all sorts of nearby restaurants and reserve for every special occasion with ease. </p>                    
                    <a className="btn btn-primary mt-8" href="#bookingForm" role="button" aria-pressed="false"> Find restaurants </a>
                </div>
                <div className="hidden flex-1 sm:flex">

                </div>
            </header>            
        </div>

    )
}

export default Hero