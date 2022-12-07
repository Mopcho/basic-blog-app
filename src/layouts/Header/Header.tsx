import { NavLink } from "react-router-dom";
import { ManuItemStyled } from "../../components/styles/MenuItem.styled";
import { NavStyled } from "../../components/styles/Nav.styled";
// import LOGO from '../../assets/images/logo.png';

export const Header = () => {
    return (
        <header className="sm:container px-5 flex-shrink py-7 m-auto">
            <NavStyled>
                <NavLink to="/">
                    <h1 className="text-darkBlue text-4xl font-bold whitespace-nowrap">Mop-Blog</h1>
                    <h5 className="text-darkBlue text-lg">The moppiest blog</h5>
                </NavLink>
                <ul>
                    <i className="fa-solid fa-bars sm:hidden text-xl text-darkBlue hover:cursor-pointer"></i>
                    <ManuItemStyled to="/" className="p-4 text-darkBlue text-xl font-bold">Home</ManuItemStyled>
                    <ManuItemStyled to="/posts" className="p-4 text-darkBlue text-xl font-bold">Posts</ManuItemStyled>
                </ul>
            </NavStyled>
        </header>
    )
}