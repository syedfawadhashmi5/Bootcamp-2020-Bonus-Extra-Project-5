import React, {useRef, useEffect} from 'react';
import lottie from 'lottie-web';
import Fade from 'react-reveal/Fade';

const Homeservices = () => {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../image/lets-chat.json')
        })
    }, [])

    return (
        <div>
            <div className="Section_A">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="text-box_1">
                                    <h1>What you get</h1>
                                </div>
                                <div className="col-md-6 col-sm-12 pt-6 pt-lg-0 d-flex justify-content-center">
                                <Fade><div className="text-box_2">
                                    <h2>Minimal Design</h2>
                                    <br />
                                    <hr />
                                    <p>Nam feugiat a ante sollicitudin luctus. Quisque eget placerat massa. Ut quis ligula ornare, pellentesque velit eget, vestibulum est. Donec pretium tristique elit eget sodales. Pellentesque posuere.</p>
                                    <br />
                                    <hr />
                                    <h2>Easy to use</h2>
                                    <p>Aliquam massa massa, consectetur non mattis fringilla, sodales ac turpis. Morbi ac felis sagittis, faucibus mauris vitae, placerat mauris.</p>
                                    </div></Fade>   
                                </div>
                                <div className="col-md-6 col-sm-12" ref={container}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homeservices
