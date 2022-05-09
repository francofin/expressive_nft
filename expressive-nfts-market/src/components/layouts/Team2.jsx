import React from 'react';
import Link from "next/link"

const Team2 = (props) => {

    const data = props.data;

    return (
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
                <div className="row mt-48">
                    {
                        data.slice(0,4).map((data,index) => (
                            <div key={index} className="col-xl-3 col-md-6">
                                <div className="team-box-2" data-aos="fade-up" data-aos-duration="800">
                                    <div className="img-team">
                                        <img src={data.img} alt="Monteno" />
                                        <div className="social">
                                            <p>
                                                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                                                <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <Link href="/team" className="h5">{data.name}</Link>
                                        <p className="fs-16">{data.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    
                </div>
                <div className="row pb-team">
                    {
                        data.slice(0,3).map((data,index) =>(
                            <div key={index} className="col-xl-4 col-md-6">
                                <div className="team-box-2" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="img-team">
                                        <img src={data.img} alt="Monteno" />
                                        <div className="social">
                                            <p>
                                                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                                                <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <Link href="/team" className="h5">{data.name}</Link>
                                        <p className="fs-16">{data.position}</p>
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

export default Team2;