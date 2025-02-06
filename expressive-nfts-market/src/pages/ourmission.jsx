import React from 'react';
import Link from "next/link";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import dataRoadMap from '@assets/expressive-proprietary/data-roadmap';
import Image from "next/image";
import Action from '@components/layouts/Action';
import RoadMap from '@components/layouts/RoadMap';
import SEO from "@components/seo";


const mission = '/images/port/extn3.jpg'
const vission = '/images/port/extn2.gif'
const img = '/images/port/extn1.png';

const OurMission = () => {
    return (
        <>
        <SEO pageTitle="ExpressIve Teen" />
        <div className='mission'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm" style={{height:450}}>
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Visions & Mission</h2>
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

            <section className="tf-section visions">
                <div className="container">
                    <div className="row reverse">
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <img src={mission} alt="Monteno" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Our Visions</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">Build Strong NFT Portfolio Community </h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse </p>
                                <Link href="#" className="btn-action style-2"  data-aos="fade-up" data-aos-duration="1200">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-section missions">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Our Mission</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">Change The Way People Trade NFT </h3>
                                <p className="fs-18 mb-29" data-aos="fade-up" data-aos-duration="1000">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                <ul data-aos="fade-up" data-aos-duration="1000">
                                    <li><i className="fa fa-check"></i><p className="fs-18">Excepteur sint occae cat cupidatat non proident sunt in culpa qui officia </p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Bnon proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse  </p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Dese runt mollit anim id est laborum velit esse </p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image" data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <img src={vission} alt="Monteno" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RoadMap data={dataRoadMap} />

            <Action />
            <Footer />
        </div>
        </>
    );
}

export default OurMission;