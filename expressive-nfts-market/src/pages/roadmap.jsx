import React from 'react';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Image from "next/image";
import dataFaq from '@assets/expressive-proprietary/data-faq';
import expressivePortfolio from '@assets/expressive-proprietary/expressive-portfolio';
import dataRoadMap from '@assets/expressive-proprietary/data-roadmap';
import SEO from "@components/seo";
import Action from '@components/layouts/Action';
import FAQ2 from '@components/layouts/FAQ2';
import Portfolio2 from '@components/layouts/Portfolio2';
import RoadMap from '@components/layouts/RoadMap';

const img = '/images/port/extn1.png';

const RoadMapMain = () => {
    return (
        <>
        <SEO pageTitle="ExpressIve Teen" />
        <div className='roadmap'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm" style={{height:450}}>
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Road Map</h2>
                                <p className="fs-24 mb-33" >Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium </p>
                            </div>
                            <Image 
                                src="/images/port/extn1.jpg" 
                                alt="Expressive Teen" 
                                width={500}
                                height={700}
                                layout="fill"
                                quality={100}
                                priority
                                objectFit="cover"
                                style={{borderRadius:40}}/>
                        </div>
                    </div>
                </div>
            </section>
            <RoadMap data={dataRoadMap} />
            <Portfolio2 data={expressivePortfolio} />
            <FAQ2 data={dataFaq} />
            <Action />
            <Footer />
        </div>
        </>
    );
}

export default RoadMapMain;