import React, { Component, Fragment } from 'react'

export default class Chumma extends Component {



    greet = () => {
        console.log("Greeted");
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.greet} style={{ margin: 100 }}>
                    Click Me
                </button>
            </Fragment>
        )
    }
}
