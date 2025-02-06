import React from 'react';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Link from "next/link";
import Image from "next/image";
import SEO from "@components/seo";
import { useRouter } from "next/router";
import dataTeam from '@assets/fake-data/data-team';
import Action from '@components/layouts/Action';

const img = '/images/port/extn1.png';

const Artist = () => {
    return (
        <>
        <SEO pageTitle="ExpressIve Teen" />
        <div className='page-team'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm" style={{height:450}}>
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
            <section className="tf-section team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>Artist</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Our Artist Universe</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Meet Our Amazing  <br /> Artists</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-107">
                        {
                            dataTeam.map((data,index)=> (
                                <div key={index} className="col-xl-3 col-md-6">
                                    <div className="team-box">
                                        <div className="img-team">
                                            <img src={data.img} alt="Monteno" />
                                            <div className="social">
                                                <p>
                                                    <Link href="#"><a><i className="fab fa-facebook-square"></i></a></Link>
                                                    <Link href="#"><a><i className="fab fa-twitter-square"></i></a></Link>
                                                    <Link href="#"><a><i className="fab fa-telegram"></i></a></Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="team-info">
                                            <Link href="#" className="h5"><a>{data.name}</a></Link>
                                            <p className="fs-16">{data.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </section>
            <Action />
            <Footer />
        </div>
        </>
    );
}

export default Artist;