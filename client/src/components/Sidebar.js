import React, { Component } from "react";
import {Link} from "react-router-dom"
import SidebarModule from "./SidebarModule";

class Sidebar extends Component {

    state={
        sidebarclass: "Sidebar",
        buttonClass: "sidebarToggle",
        }

    renderModules = () => {
        return this.props.listOfModules.map((module, index) => <Link to={module.route} key={index}><SidebarModule module={module}/></Link>)
    }

    render() {
        return (

            <div className="Sidebar">
                <button className={this.state.buttonClass} onClick={this.toggleSideBar}><i className="material-icons addIcon"> arrow_forward_ios</i></button>
                <Link to="/"><h3 style={{marginLeft:"5%"}}>Home</h3></Link>
                {this.renderModules()}
            </div>

        );
    }
}

export default Sidebar;