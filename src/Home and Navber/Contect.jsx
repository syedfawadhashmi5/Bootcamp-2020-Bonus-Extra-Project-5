import React from 'react'
import Navber from '../Navber';

const Contect = () => {
    return (
        <div>
            <div className="Section_About">
                <Navber />
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-12 pt-6 pt-lg-0  contect_box" >
                                    <form>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" aria-describedby="emailHelp" />
                                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contect
