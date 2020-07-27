import React from 'react'
import Navber from '../Navber';
import Typist from 'react-typist';
import  AboutTeam from './AboutTeam';

function About() {

    return (
        <div>
            <div className="Section_About">
                <Navber />
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-12">
                                <Typist><div className="About_text-box">
                                        <Typist.Delay ms={400} />
                                    <p>PROFESSIONAL LANDING PAGE</p>
                                    <h1>We help you manage your website successfully!</h1>
                                    </div></Typist>
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
            <AboutTeam />

        </div>
    )
}

export default About
