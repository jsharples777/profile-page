/* eslint "react/react-in-jsx-scope":"off" */
/* eslint "react/jsx-no-undef":"off" */
import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, Redirect, HashRouter} from 'react-router-dom';
import debug from 'debug';
import Navigation from "./Navigation";
import Footer from "./Footer";
import ContactMe from "./ContactMe";
import {Portfolio} from "./Portfolio";
import AboutMe from "./AboutMe";

const logger = debug('root');

class Root extends React.Component {
    constructor() {
        // @ts-ignore
        super();
    }


    componentDidMount() {
        logger('component Did Mount');
    }

    render() {
        logger('Rendering App');
        return (
            <React.Fragment>
                <Navigation/>
                <div className="container-fluid pt-4">
                    <HashRouter>
                    <Switch>
                        <Redirect exact from="/" to="/aboutme"/>
                        <Route path="/aboutme" component={AboutMe}/>
                        <Route path="/work" component={Portfolio}/>
                        <Route path="/contactme" component={ContactMe}/>
                    </Switch>
                    </HashRouter>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

$(function () {
    // @ts-ignore
    const element = <Root className="container-fluid justify-content-around"/>;

    ReactDOM.render(element, document.getElementById('root'));

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
    $('.popover-dismiss').popover({
        trigger: 'focus'
    });
});

