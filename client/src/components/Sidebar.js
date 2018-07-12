import React, { Component } from "react";
import {Link} from "react-router-dom"
import SidebarModule from "./SidebarModule";

class Sidebar extends Component {
    
    sidebarClass = () => this.props.sidebarIsOut ? "Sidebar" : "Sidebar SidebarClosed"

    buttonClass = () => this.props.sidebarIsOut ? "sidebarToggle" : "sidebarToggle sidebarToggleClosed"

    renderSidebar = () => {
        if(this.props.sidebarIsOut) {
            return(
                <div className={this.sidebarClass()}>
                    <button className={this.buttonClass()} onClick={this.toggleSidebar}><i className="material-icons addIcon"> arrow_forward_ios</i></button>
                    <Link to="/"><h3 style={{marginLeft:"5%"}}>Home</h3></Link>
                    {this.props.listOfModules.map((module, index) => {
                        return(<Link to={module.route} key={index}><SidebarModule module={module}/></Link>)})}
                    <Link to="/"><h3 onClick={this.props.onSignOut} style={{marginLeft:"5%"}}>Log Out</h3></Link>
                </div>
            )
        } else {
            return (
                <div className={this.sidebarClass()}>
                    <button className={this.buttonClass()} onClick={this.toggleSidebar}><i className="material-icons addIcon"> arrow_forward_ios</i></button>
                </div>
            )
        }
    }

    toggleSidebar = () => this.props.sidebarIsOut ? 
        this.props.handleCloseSidebar() :
        this.props.handleOpenSidebar();

    render() {
        return (
            <div>
            {this.renderSidebar()}
            </div>
        );
    }
}

export default Sidebar;