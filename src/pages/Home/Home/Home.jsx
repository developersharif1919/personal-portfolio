import Intro from '../Intro/Intro';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import Works from '../Works/Works';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <Services></Services>
            <Experience></Experience>
            <Works></Works>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;