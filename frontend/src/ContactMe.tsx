import React from "react";

export default function ContactMe(props: any) {

    const blurHandler = (event:any) => {
        if (event.target.value.trim().length === 0) {
            event.target.classList.add('is-invalid');
            event.target.parentElement.querySelector(".invalid-feedback")?.addAttribute("style","display:block");
        }
        else {
            event.target.classList.remove('is-invalid');
            event.target.parentElement.querySelector(".invalid-feedback")?.removeAttribute("style");

        }

    }
    return (
        <React.Fragment>
            <div className="row pb-4 mb-4">
                <div className="col-sm-12 col-md-9 offset-3-md">
                    <form className="needs-validation" novalidate>
                        <div className="form-group row">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputName" placeholder="Name" required onBlur={blurHandler}/>
                                <div className="invalid-feedback d-none">Name is needed.</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" required onBlur={blurHandler}/>
                                <div className="invalid-feedback">Email address is needed.</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputMessage" className="col-sm-2 col-form-label">Message</label>
                            <div className="col-sm-10">
                                <textarea rows={5} cols={20} className="form-control" id="inputMessage"
                                          placeholder="Message" required onBlur={blurHandler}/>
                                <div className="invalid-feedback">Message needed</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Send <i
                                    className="fas fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
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
        </React.Fragment>
    );

}