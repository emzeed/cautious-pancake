import React, { Component } from 'react'
import MenuIcon from './MenuIcon'
import MenuSettingsIcon from '../menu/MenuSettingsIcon'
import MenuProfileIcon from '../menu/MenuProfileIcon'
import MenuAddIcon from '../menu/MenuAddIcon'
import MenuLogIn from '../menu/MenuLogIn'

export default class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            isMenuActive: false
        }
    }

    toggleMenu = () => {
        this.setState({
            isMenuActive: !this.state.isMenuActive
        }, console.log('hello'))
    }

    render() {

        return (
            <div className="menu" >
                <MenuLogIn classname="menu-log-in" />
                <MenuAddIcon classname={this.state.isMenuActive ? "menu-circle add-icon add-icon-animate" : "menu-circle add-icon add-icon-animate-down"} />
                <MenuProfileIcon classname={this.state.isMenuActive ? "menu-circle profile-icon profile-icon-animate" : "menu-circle profile-icon profile-icon-animate-down"} />
                <MenuSettingsIcon classname={this.state.isMenuActive ? "menu-circle settings-icon settings-icon-animate" : "menu-circle settings-icon settings-icon-animate-down"} />
                <MenuIcon toggleMenu={this.toggleMenu} />
            </div>
        )
    }
}
