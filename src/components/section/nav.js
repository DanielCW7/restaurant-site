import lemon from "../images/lemon-icon.png"

const Nav = () => {
    return (
        <div className="container max-w-6xl m-auto">
            <nav className="flex flex-row justify-between heading-font">
                <div className="flex gap-2">
                    <img src={lemon} className="w-16 h-16 bg-cover hover:rotate-12 hover:scale-105 transition-all" alt="lemon icon" />
                    <span className="text-xl font-black m-auto leading-none"> The <br/> Little  Lemon </span>
                </div>
                <div></div>
            </nav>            
        </div>

    )
}

export default Nav