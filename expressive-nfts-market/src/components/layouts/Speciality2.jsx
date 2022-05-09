import React from 'react';
import { Link } from 'react-router-dom'

const Speciality2 = (props) => {

    const data = props.data;

    return (
        <section className="tf-section section-speciality">
            <div className="container">
                <div className="row">
                    {
                        data.map((data,index) => (
                            <div key={index} className="col-xl-3 col-md-6 col-12">
                                <div className={`box-item bg-2 ${data.class2}`} data-aos="fade-up" data-aos-duration="800">
                                        <img src={data.img} alt="Monteno" />
                                        <Link to="/collections" className="h5">{data.title}</Link>
                                        <p>{data.desc}</p>
                                    </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Speciality2;