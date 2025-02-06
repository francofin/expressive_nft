import React, {useEffect} from 'react';
import SEO from "@components/seo";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import dataCard from '@assets/fake-data/data-card';
import dataFaq from '@assets/fake-data/data-faq';
import dataExpress from '@assets/expressive-proprietary/data-expressio';
import dataPartners from '@assets/fake-data/data-partners';
import dataPortfolio from '@assets/fake-data/data-portfolio';
import dataRoadMap from '@assets/fake-data/data-roadmap';
import dataTeam from '@assets/fake-data/data-team';
import About from '@components/layouts/About';
import Action from '@components/layouts/Action';
import FAQ from '@components/layouts/FAQ';
import Montono from '@components/layouts/Montono';
import Newsletter from '@components/layouts/Newsletter';
import Partners from '@components/layouts/Partners';
import Portfolio from '@components/layouts/Portfolio';
import RoadMap from '@components/layouts/RoadMap';
import Speciality from '@components/layouts/Speciality';
import Team from '@components/layouts/Team';
import SliderOne from '@components/slider/SliderOne';


const Home = () => {

    
    return (
        <div>
            <SEO pageTitle="ExpressIve Teen" />
            <Header />
            <SliderOne />
            <About />
            <Speciality data={dataCard} />
            <Portfolio data={dataPortfolio} />
            <Montono data={dataExpress} />
            <RoadMap data={dataRoadMap} />
            <Newsletter />
            <Team data={dataTeam} />
            <Partners data={dataPartners} />
            <FAQ data={dataFaq} />
            <Action />
            <Footer />
        </div>
    );
}

export default Home;