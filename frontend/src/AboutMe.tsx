import React from "react";


export default function AboutMe(props: any) {
    return (
        <div className="row pt-2 pb-4">
            <div id="aboutme" className="col-sm-12 col-md-3 border-dark border-right">
                <h1 className="text-dark text-left">About Me</h1>
            </div>
            <div className="col-sm-12 col-md-9">
                <div className="card">
                    <div className="card-body bg-light text-dark">
                        I am a highly motivated person, with a broad range of technical capabilities and strong learning
                        capabilities, and a drive to rise to and above challenges. I am capable of working under
                        pressure
                        and producing results of a high quality. I am capable of acting individually, within a team,
                        providing training and/or mentoring to team members as the situation demands.<br/><br/>
                        I am in the process of writing a full featured Patient Management System with MERN underpinnings
                        to
                        modernise the current state of such software.
                    </div>
                </div>
            </div>
        </div>
    )
}

