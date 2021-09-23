import React from "react";

export default function Footer(props:any) {
    return (
        <footer className="footer text-white bg-dark fixed-bottom">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <span className="text-muted text-left truncate"><small>&copy; Dr Jim Sharples</small></span>
                    </div>
                    <div className="col-6">
                <span>
                <a className="text-muted text-center truncate" href="mailto:dr.jim.sharples.clinic@gmail.com"><small>dr.jim.sharples.clinic@gmail.com</small></a>
            </span>
                    </div>
                    <div className="col-1">
                <span>
                    <a className="text-right text-white" target="_blank" href="https://github.com/jsharples777"><i
                        className="fab fa-github"></i></a>
                </span>
                    </div>
                    <div className="col-1">
                <span>
                    <a className="text-right text-white" target="_blank" href="https://twitter.com/borncynical"><i
                        className="fab fa-twitter-square"></i></a>
                </span>
                    </div>
                    <div className="col-1">
                <span>
                    <a className="text-right text-white" target="_blank"
                       href="https://www.linkedin.com/in/dr-jim-sharples/"><i className="fab fa-linkedin"></i></a>
                </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
