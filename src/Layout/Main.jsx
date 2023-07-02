import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from "../pages/Shared/Footer/Footer";
import { themeContext } from "../Provider/Context";

const Main = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    if (darkMode) {
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "white";
    }
    return (
        <div style={{ background: darkMode ? "black" : "" }}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;