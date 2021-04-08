import React, { Component } from 'react'
import SlideShow from '../landing/Slideshow'
import DateIcon from '../landing/DateIcon'
import Logo from '../components/Logo'
import SmileIcon from '../components/SmileIcon'
import Heading3 from '../landing/Heading3'
import Heading2 from '../landing/Heading2'
import Heading1 from '../landing/Heading1'

export default class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <SlideShow />
                <DateIcon />
                <Logo />
                <SmileIcon />
                <Heading3 />
                <Heading2 />
                <Heading1 />
                <Logo />
            </div>
        )
    }
}
