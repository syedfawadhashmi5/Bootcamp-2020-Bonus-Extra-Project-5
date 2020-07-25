import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import Navber from '../Navber';
import Slide from 'react-reveal/Slide';



const Home = () => {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../image/seo (1).json')
        })
    }, [])

    return (
        <div>
            <div className="header">
            <Navber />
                <div className="container headerCon">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 pt-6 pt-lg-0 d-flex justify-content-center  heanderImg" ref={container}>
                                </div>
                                <div className="col-md-6  heanderImg">
                                <Slide left cascade>
                                    <div header_text>
                                    <h2>Hi are you Looking some ideas for your business</h2>
                                    <h2>we are help you to Grow your online  business</h2>
                                    <h3>with the help of web and app</h3>
                                    </div>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="custom-shape-divider-bottom-1595523337">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Home
