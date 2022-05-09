import React from 'react';
import Link from "next/link";

const Montono = (props) => {

    const data = props.data;

    return (
        <section className="tf-section montono">
            <div className="container-fluid">
                <div className="row">
                    {
                        data.slice(0,8).map((data,index) => (
                            <div key={index} className="col-xl-3 col-md-6">
                                <div className="image-box" data-aos="fade-up" data-aos-duration="1000">
                                    <img src={data.img} alt="Monteno" />
                                    <div className="image-box__title">
                                        <Link href="/collections" className="h6">{data.title}</Link>
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

export default Montono;