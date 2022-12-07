import { BrowserRouter } from "react-router-dom"
import { Header } from "./layouts/Header/Header"
import './index.css';
import { MainWrapper } from "./components/styles/MainWrapper";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { BlogWindow } from "./components/BlogWindow/BlogWindow";

export const App = () => {
    return (
        <MainWrapper>
            <BrowserRouter>
                <Header></Header>
                <HeroSection></HeroSection>
                <BlogWindow></BlogWindow>
            </BrowserRouter>
        </MainWrapper>
    )
}
