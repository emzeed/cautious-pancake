import React, { Component } from 'react'
import SlideShow from '../components/landing/Slideshow'
import DateIcon from '../components/landing/DateIcon'
import Logo from '../components/Logo'
import SmileIcon from '../components/SmileIcon'
import Heading3 from '../components/landing/Heading3'
import Heading2 from '../components/landing/Heading2'
import Heading1 from '../components/landing/Heading1'

export default class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <SlideShow />
                <DateIcon />
                <Logo className="logo-top" />
                <SmileIcon className="landing-smile-icon" />
                <Heading3 />
                <Heading2 />
                <Heading1 />
                <Logo className="logo-bottom" />
            </div>
        )
    }
}
