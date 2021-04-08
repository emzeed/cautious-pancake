import React, { Component } from 'react'

export default class form extends Component {
    render() {
        return (
            <div className="form-container">
            <form className="form">
                <label>
                    Image
                    <input className="input" type="text" />
                </label>
                <label>
                    Title
                    <input className="input" type="text" />
                </label>
                <label>
                    Name
                    <input className="input" type="text" />
                </label>
                <label>
                    Email
                    <input className="input" type="text" />
                </label>
                <input className="submit" type="submit" value="submit" />
            </form>
            </div>
        )
    }
}
