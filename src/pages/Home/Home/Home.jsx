import React from 'react';
import Intro from '../Intro/Intro';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <Services></Services>
            <Experience></Experience>
            <Works></Works>
        </div>
    );
};

export default Home;