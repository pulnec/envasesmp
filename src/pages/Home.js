import React from 'react';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Metodologie from '../components/Metodologie';
import Want from '../components/Want';
import { Whatsapp } from '../components/whatsapp/Whatsapp';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Metodologie/>
            <Want/>
            <Footer />
            <Whatsapp/>
        </>

    )
}

export default Home;

