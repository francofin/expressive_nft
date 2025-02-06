import React from 'react';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import dataFaq from '@assets/expressive-proprietary/data-faq';
import dataPartners from '@assets/fake-data/data-partners';
import Action from '@components/layouts/Action';
import FAQ2 from '@components/layouts/FAQ2';
import Partners from '@components/layouts/Partners';
import SEO from "@components/seo";
import Image from "next/image";

const img = '/images/port/extn1.png';

const FAQ = () => {
    return (
        <>
        <SEO pageTitle="ExpressIve Teen" />
        <div className='page-faq'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm" style={{height:450}}>
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">FAQ</h2>
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
            <FAQ2 data={dataFaq} />
            <Partners data={dataPartners} />
            <Action />
            <Footer />
        </div>
        </>
    );
}

export default FAQ;