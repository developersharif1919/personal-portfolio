import { useContext } from "react";
import Intro from '../Intro/Intro';
import './Home.css'
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import Works from '../Works/Works';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import { themeContext } from "../../../Provider/Context";

const Home = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div
            className="home"
            style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
            }}
        >
            <Intro></Intro>
            <Services></Services>
            <Experience></Experience>
            <Works></Works>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;