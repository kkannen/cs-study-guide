import React, { Component } from 'react';
import PropTypes from "prop-types";

class SidebarModule extends Component {

    render() {
        return (
            <div className="SidebarModule">
                <h3>{this.props.module.title}</h3>
            </div>
        );
    }
}

SidebarModule.propTypes ={
    module: PropTypes.object
}

export default SidebarModule;