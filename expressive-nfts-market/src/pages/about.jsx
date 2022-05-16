import React from 'react';
import Image from "next/image";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import dataPartners from '@assets/fake-data/data-partners';
import dataPortfolio from '@assets/fake-data/data-portfolio';
import dataTeam from '@assets/fake-data/data-team';
import About from '@components/layouts/About';
import Action from '@components/layouts/Action';
import Counter from '@components/layouts/Counter';
import Partners from '@components/layouts/Partners';
import Portfolio from '@components/layouts/Portfolio';
import Team2 from '@components/layouts/Team2';
import SEO from "@components/seo";

const AboutUs = () => {
    return (
        <>
        <SEO pageTitle="ExpressIve Teen" />
        <div className='about'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body ab">
                        <Image 
                            src="/images/nfts/hills.jpg" 
                            alt="Expressive Teen" 
                            width={500}
                            height={500}
                            layout="fill"
                            quality={100}
                            priority
                            objectFit="cover"
                            style={{borderRadius:20}}/>
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">About Us</h2>
                                <p className="fs-24 mb-33" >Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Counter />
            <Portfolio data={dataPortfolio} />
            <Team2 data={dataTeam} />
            <Partners data={dataPartners} />
            <Action />
            <Footer />
        </div>
        </>
    );
}

export default AboutUs;