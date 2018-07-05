import React, { Component } from "react";
import {Link} from "react-router-dom"
import SidebarModule from "./SidebarModule";

class Sidebar extends Component {

    renderModules = () => {
        return this.props.listOfModules.map((module, index) => {
            if(index%2 === 0) {
               return(
                    <Link to={module.route} key={index}>
                        <SidebarModule module={module} bg={{backgroundColor: "#00000023"}}/>
                    </Link>
               ) 
            } else {
                return (
                    <Link to={module.route} key={index}>
                        <SidebarModule module={module} bg={{backgroundColor: "#00000000"}}/>
                    </Link>
                )
            }
        })
    }

    //button to toggle sidebar in future
    //<button className={this.state.buttonClass} onClick={this.toggleSidebar}><i className="material-icons addIcon"> arrow_forward_ios</i></button>


    render() {
        return (

            <div className="Sidebar">
                <Link to="/"><h3 style={{marginLeft:"5%"}}>Home</h3></Link>
                {this.renderModules()}
            </div>

        );
    }
}

export default Sidebar;