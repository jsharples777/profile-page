import React from "react";

export default function Navigation(props: any) {

    const { hash } = window.location;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img className="rounded" src="/img/profilepic.jpeg" width="40" height="40" alt="Profile Pic"/>
                &nbsp;Jim Sharples
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                    aria-expanded="false"
                    aria-controls="navigation" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navigation" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    {}
                    <li className="nav-item pr-2"  active={(hash === '#/aboutme')?"true":"false"}><a className="nav-link" href="/#/aboutme" >About Me <i
                        className="fas fa-user"></i></a></li>
                    <li className="nav-item pr-2" active={(hash === '#/work')?"true":"false"}><a className="nav-link" href="/#/work" >My Work <i
                        className="fas fa-briefcase"></i></a></li>
                    <li className="nav-item pr-2" active={(hash === '#/contactme')?"true":"false"}><a className="nav-link" href="/#/contactme" >Contact
                        Me <i className="fa fa-phone-square"></i></a></li>
                    <li className="nav-item pr-2"><a className="nav-link" href="/resume.pdf" target="_blank"
                                                     data-toggle="tooltip" data-placement="bottom"
                                                     title="Open my resume">Resume <i
                        className="fas fa-address-card"></i></a></li>
                </ul>
            </div>
        </nav>
    );
}
