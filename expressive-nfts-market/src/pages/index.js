import React, {useEffect} from 'react';
import SEO from "@components/seo";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import dataCard from '@assets/fake-data/data-card';
import dataFaq from '@assets/fake-data/data-faq';
import dataMontono from '@assets/fake-data/data-montono';
import dataPartners from '@assets/fake-data/data-partners';
import dataPortfolio from '@assets/fake-data/data-portfolio';
import dataRoadMap from '@assets/fake-data/data-roadmap';
import dataTeam from '@assets/fake-data/data-team';
import dataTestimonials from '@assets/fake-data/data-testimonials';
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
import Testimonial from '@components/layouts/Testimonial';
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
            <Montono data={dataMontono} />
            <RoadMap data={dataRoadMap} />
            <Newsletter />
            <Team data={dataTeam} />
            {/* <Partners data={dataPartners} />
            <Testimonial data={dataTestimonials} />
            <FAQ data={dataFaq} />
            <Action /> */}
            <Footer />
        </div>
    );
}

export default Home;