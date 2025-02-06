import React from 'react';
import Image from "next/image";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import dataPartners from '@assets/fake-data/data-partners';
import expressivePortfolio from '@assets/expressive-proprietary/expressive-portfolio';
import dataTeam from '@assets/expressive-proprietary/our-team';
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
                        <div className="page-title__body" style={{height:500}}>
                        <Image 
                            src="/images/port/extn1.jpg" 
                            alt="Expressive Teen" 
                            width={500}
                            height={700}
                            layout="fill"
                            quality={100}
                            priority
                            objectFit="cover"
                            style={{borderRadius:20}}/>
                            {/* <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Expressive Teen</h2>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Counter />
            <Portfolio data={expressivePortfolio} />
            <Team2 data={dataTeam} />
            <Partners data={dataPartners} />
            <Action />
            <Footer />
        </div>
        </>
    );
}

export default AboutUs;