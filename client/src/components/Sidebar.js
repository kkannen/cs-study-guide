import React, { Component } from 'react';
import SidebarModule from './SidebarModule';

class Sidebar extends Component {

    state={
        sidebarclass: "Sidebar",
        buttonClass: "sidebarToggle",
        listOfModules: [
            {
                title: 'Composition of Programs',
                description: 'Structure and Interpretation of Computer Programs',
                progress: 10,
            },
            {
                title: 'Computer Architecture',
                description: 'how a computer actually works',
                progress: 50,
            },
            {
                title: 'Algorithms and Data Structures',
                description: 'how to use ubiquitous data structures like stacks, queues, trees, and graphs',
                progress: 45
            },
            {
                title: 'Math for CS',
                description: 'CS is basically a runaway branch of applied math',
                progress: 31,
            },
            {
                title: 'Computer Networking',
                description: 'The Internet turned out to be a big deal: understand how it works to unlock its full potential.',
                progress: 89,
            },
            {
                title: 'Databases',
                description: 'Data is at the heart of most significant programs',
                progress: 100,
            },
            {
                title: 'Languages and Compilers',
                description: 'understand how languages and compilers actually work',
                progress: 12,
            },
            {
                title: 'Distributed Systems',
                description: 'These days, most systems are distributed systems',
                progress: 74,
            },
        ]
    }

    toggleSideBar = () => (this.state.sidebarclass === "Sidebar") ? 
    this.setState({sidebarclass: "Sidebar SidebarClosed", buttonClass: "sidebarToggle toggleClosed"}) : 
    this.setState({sidebarclass: "Sidebar", buttonClass: "sidebarToggle"});

    renderModules = () => {
        if(this.state.sidebarclass === "Sidebar"){
            return this.state.listOfModules.map((module, index) => <SidebarModule key={index} module={module}/>)
        } return null;
    }

    render() {
        return (

            <div className={this.state.sidebarclass}>
                <div className="moduleContainer">
                    <button className={this.state.buttonClass} onClick={this.toggleSideBar}><i className="material-icons addIcon"> arrow_forward_ios</i></button>
                    {this.renderModules()}
                </div>
            </div>

        );
    }
}

export default Sidebar;