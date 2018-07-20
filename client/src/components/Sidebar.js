import React, { Component } from "react";
import {Link} from "react-router-dom"
import SidebarModule from "./SidebarModule";
import PropTypes from "prop-types";

class Sidebar extends Component {
    
    sidebarClass = () => this.props.sidebarIsOut ? "Sidebar" : "Sidebar SidebarClosed"

    buttonClass = () => this.props.sidebarIsOut ? "sidebarToggle" : "sidebarToggle sidebarToggleClosed"

    isAdministrator = () => {
        if (this.props.isAdmin){
            return  (
                <Link to="/admin-add-class">
                    <div className="SidebarModule">
                        <h3 style={{margin: 0}}>Admin</h3>
                    </div>
                </Link>
            )
        } return null
    }

    renderSidebar = () => {
        if(this.props.sidebarIsOut) {
            return(
                <div className={this.sidebarClass()}>
                    <button className={this.buttonClass()} onClick={this.toggleSidebar}>
                        <i className="material-icons addIcon"> arrow_forward_ios</i>
                    </button>
                    <Link to="/">
                        <div className="SidebarModule">
                            <h3 style={{margin: 0}}>Home</h3>
                        </div>
                    </Link>
                    {this.isAdministrator()}
                    {this.props.listOfModules.map((module, index) => {
                        return(
                            <Link to={module.route} key={index}>
                                <SidebarModule module={module}/>
                            </Link>)
                        })
                    }
                    <Link to="/">
                        <div className="SidebarModule">
                            <h3 style={{margin: 0}} onClick={this.props.onSignOut}>Log Out</h3>
                        </div>
                    </Link>
                </div>
            )
        } else {
            return (
                <div className={this.sidebarClass()}>
                    <button className={this.buttonClass()} onClick={this.toggleSidebar}>
                        <i className="material-icons addIcon"> arrow_forward_ios</i>
                    </button>
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

Sidebar.propTypes = {
    handleCloseSidebar: PropTypes.func,
    handleOpenSidebar: PropTypes.func,
    sidebarIsOut: PropTypes.bool,
    isAdmin: PropTypes.bool,
    listOfModules: PropTypes.array,
    onSignOut: PropTypes.func
};

export default Sidebar;