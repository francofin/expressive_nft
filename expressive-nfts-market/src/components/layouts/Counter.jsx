import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <section className="tf-section counter">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="counter__body" data-aos="fade-down" data-aos-duration="1000">
                            <div className="counter">
                                <div className="number-counter">
                                    <CountUp end={100} />K
                                </div>
                                <h5 className="title">Registered Users</h5>    
                            </div>
                            <div className="counter">
                                <div className="number-counter">
                                <CountUp end={15000} />
                                </div>
                                <h5 className="title">Total Assets</h5>    
                            </div>
                            <div className="counter">
                                <div className="number-counter">
                                <CountUp end={2} />
                                </div>
                                <h5 className="title">Monthly Droppings</h5>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Counter;