import lemon from "../images/lemon-icon.png"

const Footer = () => {
    return (
        <footer className="bg-secondary">
            <div className="container flex gap-2 justify-center m-auto text-white">
                <img src={lemon} className="w-10 h-10 bg-cover" alt="lemon icon"/>
                <span className="heading-font text-md font-black leading-none"> The <br/> Little  Lemon </span>
            </div>            
        </footer>
    )
}

export default Footer