import React from 'react';
import { Link } from 'react-router-dom'

const Partners = (props) => {

    const data = props.data;

    return (
        <section className="tf-section partners">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center">
                            <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>Team</span></h1>
                            <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Partners</h5>
                            <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">We Are Partnered <br /> with Top Brands </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="partners__body" data-aos="fade-up">
                            {
                                data.map((data,index) => (
                                    <div key={index} className={`box-partner border-r ${data.border}`}>
                                        <Link to="#"><img src={data.img} alt="Monteno" /></Link>
                                    </div>
                                ))
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;