import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';


class SidebarModule extends Component {



    render() {
        return (

            <div className="SidebarModule">
                <h4>{this.props.module.title}</h4>
                <LinearProgress color="secondary" variant="determinate" value={this.props.module.progress}/>
            </div>

        );
    }
}

export default SidebarModule;