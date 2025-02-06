import React from 'react';
import Image from "next/image";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Link from "next/link";
import dataTeam from '@assets/expressive-proprietary/our-team';
import Action from '@components/layouts/Action';
import SEO from "@components/seo";


const img = '/images/port/extn1.png';

const Team = () => {
    return (
        <>
        <SEO pageTitle="ExpressIve Teen" />
        <div className='page-team'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm" style={{height:450}}>
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Team</h2>
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
                                style={{borderRadius:20}}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tf-section team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>Team</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Team Members</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Our Amazing Team <br /> Members</h3>
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
                                                    <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                                                    <Link href="#"><i className="fab fa-twitter-square"></i></Link>
                                                    <Link href="#"><i className="fab fa-telegram"></i></Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="team-info">
                                            <Link href="#" className="h5">{data.name}</Link>
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

export default Team;