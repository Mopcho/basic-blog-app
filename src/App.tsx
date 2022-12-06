import { BrowserRouter } from "react-router-dom"
import { Header } from "./layouts/Header/Header"
import './index.css';

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header></Header>
                <p className="bg-red-700 text-blue-500">asdasdasdasdsadasd</p>
            </BrowserRouter>
        </>
    )
}
