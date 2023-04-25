import React from 'react'
//import web from "./images/m1.webp";
import { NavLink } from 'react-router-dom';
export default function Common(props) {
    return (
        <>
            <section id="header" className='d-flex align-item-center'>
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">


                                <div className="col-md-6 py-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name} <strong className="brand-name">SanketTech</strong></h1>
                                    <h2 className='my-3'>
                                        we are team of talented developer macking websites
                                    </h2>
                                    <div className="mt-5">
                                        <NavLink to={props.visit} className='btn'><span>{props.btname}</span></NavLink>
                                    </div>

                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} alt="testing" className='img-fluid animated' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
