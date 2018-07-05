import React, { Component } from 'react';


class SidebarModule extends Component {

    render() {
        return (

            <div className="SidebarModule">
                <h3 style={{margin: 3}} >{this.props.module.title}</h3>
                {/* <p style={{fontWeight: "lighter", margin:0}} >{this.props.module.description}</p> */}
            </div>

        );
    }
}

export default SidebarModule;