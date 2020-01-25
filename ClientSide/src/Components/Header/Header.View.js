import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function HeaderView() {


    const [getNavState, setNavState] = useState(null);


    useEffect(() => {
        setNavState(false);
    }, [])


    const handleBobble = () => {
        setNavState(!getNavState);
    }

    return (
        <Fragment>
            <div className="Header">
                <div className="HeaderRow">
                    <div className="Bobble" onClick={handleBobble}>
                        <i className="fas fa-align-left"></i>
                    </div>
                </div>
            </div>
            <div className="Nav" style={getNavState ?
                { height: "100vh" } : { height: "0px" }}>
                <div className="NavRow">
                    <div className="NavLinks" style={getNavState ?
                        { opacity: 1 } : { opacity: 0 }}>
                        <Link onClick={handleBobble} to="/"><p>Home</p></Link>
                        <Link onClick={handleBobble} to="/aboutus"><p>About Us</p></Link>
                        <Link onClick={handleBobble} to="/contactus"><p>Contact Us</p></Link>
                        <Link onClick={handleBobble} to="/locateus"><p>Locate Us</p></Link>
                        <Link onClick={handleBobble} to="/howitworks"><p>How It Works</p></Link>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}
