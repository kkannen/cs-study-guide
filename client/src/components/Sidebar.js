import React, { Component } from "react";
import {Link} from "react-router-dom"
import SidebarModule from "./SidebarModule";

class Sidebar extends Component {
    renderSidebar = () => {
        if(this.props.sidebarIsOut) {
            return(
                <div className={this.sidebarClass()}>
                    <button className={this.buttonClass()} onClick={this.toggleSidebar}><i className="material-icons addIcon"> arrow_forward_ios</i></button>
                    <Link to="/"><h3 style={{marginLeft:"5%"}}>Home</h3></Link>
                    {this.renderModules()}
                </div>
            )
        } else {
            return (
                <div className={this.sidebarClass()}>
                    <button className={this.buttonClass()} onClick={this.toggleSidebar}><i className="material-icons addIcon"> arrow_forward_ios</i></button>
                    {this.renderModules()}
                </div>
            )
        }
    }

    renderModules = () => {
        if(this.props.sidebarIsOut) {
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
        } return null
    }

    toggleSidebar = () => this.props.sidebarIsOut ? 
        this.props.handleCloseSidebar() :
        this.props.handleOpenSidebar();

    sidebarClass = () => this.props.sidebarIsOut ? "Sidebar" : "Sidebar SidebarClosed"

    buttonClass = () => this.props.sidebarIsOut ? "sidebarToggle" : "sidebarToggle sidebarToggleClosed"

    render() {
        return (
            <div>
            {this.renderSidebar()}
            </div>
        );
    }
}

export default Sidebar;