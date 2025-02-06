import React from 'react';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import Accordion from 'react-bootstrap/Accordion';

const FAQ2 = (props) => {

    const data = props.data;

    return (
        <section className="tf-section faq">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="block-text center">
                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>FAQ</span></h1>
                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">FAQ</h5>
                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Frequently Aksed <br /> Questions</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="flat-tabs" data-aos="fade-up" data-aos-duration="800">

                    <Tabs>
                        <TabList>
                        <Tab>Cryptocurrency</Tab>
                        <Tab>NFT Token</Tab>
                        <Tab>Collection</Tab>
                        <Tab>Crypto Trading</Tab>
                        </TabList>

                        <TabPanel>
                            {
                                data.map((data,index) => (
                                    <Accordion className="h5 toggle-title" key={index} title={data.title}  show={data.show}>
                                            <p className="fs-18">{data.text}</p>
                                        </Accordion>
                                ))
                            }  
                        </TabPanel>
                        <TabPanel>
                            {
                                data.map((data,index) => (
                                    <Accordion className="h5 toggle-title" key={index} title={data.title} >
                                            <p className="fs-18">{data.text}</p>
                                        </Accordion>
                                ))
                            } 
                        </TabPanel>
                        <TabPanel>
                            {
                                data.map((data,index) => (
                                    <Accordion className="h5 toggle-title" key={index} title={data.title} >
                                            <p className="fs-18">{data.text}</p>
                                        </Accordion>
                                ))
                            } 
                        </TabPanel>
                        <TabPanel>
                            {
                                data.map((data,index) => (
                                    <Accordion className="h5 toggle-title" key={index} title={data.title} >
                                            <p className="fs-18">{data.text}</p>
                                        </Accordion>
                                ))
                            } 
                        </TabPanel>
                    </Tabs>
                    </div> 
                </div>
            </div>
        </div>
    </section>
    );
}

export default FAQ2;