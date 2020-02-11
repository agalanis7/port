import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || React Creative Agency Template </title>
                    <meta name="description" content="Andreas Galanis" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
