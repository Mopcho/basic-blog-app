import { BrowserRouter } from "react-router-dom"
import { Header } from "./layouts/Header/Header"
import './index.css';
import { MainWrapper } from "./components/styles/MainWrapper";
import { HeroSection } from "./components/HeroSection/HeroSection";

export const App = () => {
    return (
        <MainWrapper>
            <BrowserRouter>
                <Header></Header>
                <HeroSection></HeroSection>
            </BrowserRouter>
        </MainWrapper>
    )
}
