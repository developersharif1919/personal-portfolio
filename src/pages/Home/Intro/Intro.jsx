import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import './Intro.css'
import Vector1 from "../../../img/Vector1.png";
import Vector2 from "../../../img/Vector2.png";
import boy from "../../../img/boy.png";
import glassesimoji from "../../../img/glassesimoji.png";
import thumbup from "../../../img/thumbup.png";
import crown from "../../../img/crown.png";
import Github from "../../../img/github.png";
import LinkedIn from "../../../img/linkedin.png";
import Instagram from "../../../img/instagram.png";
import { Link } from "react-router-dom";
import FloatingDiv from "./FloatingDiv/FloatingDiv";

const Intro = () => {

    // Transition
    const transition = { duration: 2, type: "spring" };
    return (
        <div className="Intro" id="Intro">
            {/* left name side */}
            <div className="i-left">
                <div className="i-name">
                    {/* yahan change hy darkmode ka */}
                    <span >Hy! I Am <span className="text-5xl font-bold" style={{ color: `var(--orange)` }}>Sharif</span></span>
                    <div className="flex items-center">
                        <span className="text-3xl font-bold">I'm a&nbsp;</span>
                        <span>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 50,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('<span style="color: var(--orange); font-size: 1.5rem; font-weight: 800;">MERN Stack Developer</span>')
                                        .pauseFor(500)
                                        .deleteAll()
                                        .typeString('<span style="color: var(--blue); font-size: 1.5rem; font-weight: 800;">Web Developer</span>')
                                        .pauseFor(500)
                                        .deleteAll()
                                        .typeString('<span style="color: var(--orange); font-size: 1.5rem; font-weight: 800;">Front-end Developer</span>')
                                        .pauseFor(500)
                                        .start();
                                }}
                            />
                        </span>
                    </div>
                    <span>
                        Frontend Developer with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>
                <Link to="contact" smooth={true} spy={true}>
                    <button className="button i-button">Hire me</button>
                </Link>
                {/* social icons */}
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            {/* right image side */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                {/* animation */}
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji}
                    alt=""
                />

                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div"
                    style={{ width: '250px' }}
                >
                    <FloatingDiv img={crown} text1="MERN Stack" text2="Developer" />
                </motion.div>

                {/* animation */}
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div"
                >
                    {/* floatinDiv mein change hy dark mode ka */}
                    <FloatingDiv img={thumbup} text1="Best Design" text2="Award" />
                </motion.div>

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;