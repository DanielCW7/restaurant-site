import lemon from "./images/lemon-icon.png"

const Nav = () => {
    return (
        <div className="container max-w-6xl m-auto">
            <nav className="flex flex-row justify-between">
                <div className="flex gap-2">
                    <img src={lemon} className="w-16 h-16 bg-cover" />
                    <p className="text-xl font-black m-auto leading-none"> The <br/> Little  Lemon </p>
                </div>
                <ul className="flex gap-8">
                    <a href="/search" className="m-auto"><li> Search </li></a>
                    <a href="/profile" className="m-auto"><li> Profile </li></a>
                </ul>
            </nav>            
        </div>

    )
}

export default Nav