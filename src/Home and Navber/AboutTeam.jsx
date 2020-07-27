import React from 'react';
import iamg1 from '../image/team-image1.jpg'
import iamg2 from '../image/team-image3.jpg'
const AboutTeam = () => {
    return (
        <div>
            <div className="Section_AboutTeam">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="team-box-text">
                                    <h1>Professional Team for you</h1>
                                </div>
                                <div className="col-md-6">
                                    <div className="About_text-box">
                                        <div class="card" >
                                            <img src={iamg1} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h1 class="card-text">Andrew Orange Art Director</h1>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="About_text-box">
                                        <div class="card" >
                                            <img src={iamg2} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h1 class="card-text">Jack Wilson CEO / Founder</h1>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTeam
