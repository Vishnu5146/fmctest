import React, { Fragment } from 'react'
import background from '../Assets/Background.jpeg'


//IMPORTING COMPONENTS OF HOMEPAGE
import HomeIndex from '../Components/Homepage/HomeIndex'

export default function HomePageView() {


    var divImage = {
        backgroundImage: "url(" + background + ")",
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center center"
    };

    return (
        <Fragment>
            <div className="App" style={divImage}>
                <HomeIndex />
            </div>
        </Fragment>
    )
}
