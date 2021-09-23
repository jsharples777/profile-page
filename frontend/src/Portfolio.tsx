import React from "react";

export function Portfolio(props: any) {
    return (

        <div className="row pb-4">
            <div id="work" className="col-sm-12 col-md-3 border-dark border-right">
                <h1 className="text-dark text-left">Work</h1>
            </div>
            <div className="col-sm-12 col-md-9">
                <div className="container-fluid">
                    <div className="row pb-sm-0 pb-md-2">
                        <div className="col-12 pb-sm-2">
                            <div className="card">
                                <img className="card-img" src="/img/patient-management-system.jpg"
                                     alt="Patient Management System"/>
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <div className="bg-dark p-2 w-50">
                                        <h4 className="card-title">Patient Management System</h4>
                                        <h6 className="card-subtitle mb-2">Full Stack MERN</h6>
                                        <p className="card-text text-warning">Work in progress <i
                                            className="fas fa-exclamation-triangle"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-sm-0 pb-md-2">
                        <div className="col-sm-12 col-md-6 pb-sm-2">
                            <div className="card">
                                <img className="card-img" src="/img/chopnchange.jpg" alt="Chop 'n' Change"/>
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <a className="text-decoration-none"
                                       href="https://group3-recipe-search.herokuapp.com/">
                                        <div className="bg-dark p-2 w-75">
                                            <h4 className="card-title text-warning">Chop 'n' Change</h4>
                                            <h6 className="card-subtitle mb-2">Full Stack MERN</h6>
                                        </div>
                                    </a>
                                    <p className="card-text text-light bg-dark p-2 w-75"><a
                                        className="text-right text-decoration-none text-white" target="_blank"
                                        href="https://github.com/jsharples777/week-05-homework">What's in the kitchen
                                        today? <i className="fab fa-github"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 pb-sm-2">
                            <div className="card">
                                <a href=""><img className="card-img" src="/img/weather.jpg" alt="Weather Tracker"/></a>
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">

                                    <a className="text-decoration-none" href="https://week-06-homework.herokuapp.com/">
                                        <div className="bg-dark p-2 w-75">
                                            <h4 className="card-title text-info">Weather Tracker</h4>
                                            <h6 className="card-subtitle mb-2">Bulma CSS, Express, React, Node.js</h6>
                                        </div>
                                    </a>
                                    <p className="card-text text-light bg-dark p-2 w-75"><a
                                        className="text-right text-decoration-none text-white" target="_blank"
                                        href="https://github.com/jsharples777/week-05-homework">What's the weather going
                                        to be like? <i className="fab fa-github"></i></a></p>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row pb-sm-0 pb-md-2">
                        <div className="col-sm-12 col-md-6 pb-sm-2">
                            <div className="card">
                                <img className="card-img" src="/img/tech-blog.jpg" alt="Tech Blog"/>
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <a className="text-decoration-none" href="https://tech-blog-jps.herokuapp.com/">
                                        <div className="bg-dark p-2 w-75">
                                            <h4 className="card-title text-info">Tech Blog</h4>
                                            <h6 className="card-subtitle mb-2">Full Stack with MySQL and Socket.io </h6>
                                        </div>
                                    </a>
                                    <p className="card-text text-light bg-dark p-2 w-75"><a
                                        className="text-right text-decoration-none text-white" target="_blank"
                                        href="https://github.com/jsharples777/tech-blog-jps">Let's talk about technology
                                        together <i className="fab fa-github"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 pb-sm-2">
                            <div className="card">
                                <img className="card-img" src="/img/imboard.jpg" alt="I'm Board"/>
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <a className="text-decoration-none" href="https://im-board-beta.herokuapp.com/">
                                        <div className="bg-dark p-2 w-75">
                                            <h4 className="card-title text-white">I'm Board</h4>
                                            <h6 className="card-subtitle mb-2">Full Stack with GraphQL, WebRTC,
                                                Socket.io</h6>
                                        </div>
                                    </a>
                                    <p className="card-text text-light bg-dark p-2 w-75"><a
                                        className="text-right text-decoration-none text-white" target="_blank"
                                        href="https://github.com/jsharples777/im-board">Let's get together remotely and
                                        play a game <i className="fab fa-github"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
