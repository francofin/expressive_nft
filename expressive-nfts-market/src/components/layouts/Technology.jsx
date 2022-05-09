import React from 'react';
import Link from "next/link"

import item from '@assets/fake-data/item';


const Technology = (props) => {

const data = props.data;
  return (
    <section className="tf-section technology" id='technology'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="block-text center">
                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Technology</h5>
                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Monteno unique Technology</h3>
                    </div>
                </div>
            </div>
            <div className="row mt-53">
                <div className="col-xl-6 col-md-12">
                    <div className="row">
                        {
                            data.map((data,index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="icon-box bg-2" data-aos="fade-up">
                                        <div className="icon">
                                            <img src={data.icon} alt="Monteno" />
                                        </div>
                                        <div className="content">
                                            <Link href="#" className="h5">
                                                {data.title}
                                            </Link>
                                            <p className="fs-16">{data.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="group-image">
                        <img src={item.technology} alt="Monteno" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Technology;