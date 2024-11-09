import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;