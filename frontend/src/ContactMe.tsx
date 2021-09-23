import React from "react";

export default function ContactMe(props: any) {
    return (
        <div className="row pb-4 mb-4">
            <div id="contactme" className="col-sm-12 col-md-3 border-dark border-right">
                <h1 className="text-dark text-left">Contact Me</h1>
            </div>
            <div className="col-sm-12 col-md-9">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                                <span className="align-middle">
                                 <a className="text-muted"
                                    href="mailto:dr.jim.sharples.clinic@gmail.com"><span
                                     className="text-center">dr.jim.sharples.clinic@gmail.com</span></a>
                                </span>
                        </div>
                        <div className="col-2">
                        <span className="align-middle">
                            <a className="text-right text-black" target="_blank" href="https://github.com/jsharples777"><i
                                className="fab fa-github"></i></a>
                        </span>
                        </div>
                        <div className="col-2">
                                <span className="align-middle text-right">
                                    <a className="text-blue" target="_blank"
                                       href="https://twitter.com/borncynical"><i className="fab fa-twitter-square"></i></a>
                                </span>
                        </div>
                        <div className="col-2">
                                <span className="align-middle text-right">
                                    <a className="text-blue" target="_blank"
                                       href="https://www.linkedin.com/in/dr-jim-sharples/"><i
                                        className="fab fa-linkedin"></i></a>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}