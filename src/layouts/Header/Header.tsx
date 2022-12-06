import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header className="flex text-center">
            <nav>
                <ul>
                    <NavLink to="/" className="black">Home</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                    <p className="bg-black">asdasdsa</p>
                </ul>
            </nav>
        </header>
    )
}