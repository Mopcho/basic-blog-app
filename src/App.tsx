import { BrowserRouter } from "react-router-dom"
import { Header } from "./layouts/Header/Header"
import './index.css';
import { MainWrapper } from "./components/styles/MainWrapper";

export const App = () => {
    return (
        <MainWrapper>
            <BrowserRouter>
                <Header></Header>
            </BrowserRouter>
        </MainWrapper>
    )
}
