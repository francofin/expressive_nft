import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom'
import Countdown from '../layouts/Countdown';

const SliderThree = () => {

    const [datatext] = useState({
        subtitle: 'We are Monteno NFT',
        title: 'Collect Next Generation NFTs Today',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'
    })

    return (
    
    <section className="tf-section hero-slider">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-md-12 col-12">
                    <div className="block-text pt-24" >
                        <h6 className="sub-title mb-6" data-aos="fade-up">{datatext.subtitle}</h6>
                        <h2 className="title mb-26" data-aos="fade-up">{datatext.title} </h2>
                        <p className="desc mb-43" data-aos="fade-up">{datatext.desc} </p>
                        <Link to="/about" className="btn-action style-2" data-aos="fade-up" data-aos-duration="1200" >Get Connected</Link>
                    </div>
                </div>
                <div className="col-xl-7 col-md-12 col-12">
                    <div className="token-sale" data-aos="zoom-in" data-aos-duration="2000">
                        <h5 className="fs-30">Token Sale Ends In</h5>
                        <div className="countdown-container">
                            <Countdown />
                            
                        </div>
                        <div className="tf-progress-bar">
                            <Progress done="73"/>
                            <div className="descrip">
                                <h6 className="fs-14">$18.090<span>Pledget</span></h6>
                                <h6 className="fs-16">$35.090<span>Goal</span></h6>
                            </div>
                        </div>
                        <div className="button-action">
                            <Link to="/contact" className="btn-action style-2" >Purchase Now</Link>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

const Progress = ({done}) => {
	const [style, setStyle] = useState();

    useEffect(() => {
        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`
            }
            
            setStyle(newStyle);
        }, 200);
        return () => {
            setStyle({}); // This worked for me
        };
    }, [done]);
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

export default SliderThree;