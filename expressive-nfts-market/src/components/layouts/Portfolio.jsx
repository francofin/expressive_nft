import React from 'react';
import Link from "next/link";

const Portfolio = (props) => {

    const data = props.data;

    return (
        <section className="tf-section porfolio">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>Join</span></h1>
                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Join The Expressive Community</h5>
                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Show The World Your Left Brain</h3>
                    </div>
                </div>
            </div>
            <div className="row mt-61">
                {
                    data.map((data,index) => (
                        <div key={index} className="col-md-6">
                            <div className="icon-box bg-2" data-aos="fade-up">
                                <div className="icon">
                                    <img src={data.img} alt="ExpressiveTeen" style={{borderRadius:10}}/>
                                </div>
                                <div className="content">
                                    <p className="fs-16 color-main">{data.step}</p>
                                    <Link href='/contact' className="h5">
                                        {data.title}
                                    </Link>
                                    <p className="fs-18">{data.desc} </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    );
}

export default Portfolio;