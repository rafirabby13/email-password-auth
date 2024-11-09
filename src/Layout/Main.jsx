import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";

const Main = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;