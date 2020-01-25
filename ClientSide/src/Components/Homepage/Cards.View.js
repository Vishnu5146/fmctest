import React, { Fragment, useState, useEffect } from 'react'
import image from '../../Assets/archery.png'

import { Link, useRouteMatch } from 'react-router-dom'


export default function CardsView() {


    //DECLARING THE STATE CONSTANTS
    const [getServices, setServices] = useState([
        {
            id: "1",
            serviceName: "Elite Badminton",
            serviceType: "Badminton"
        },
        {
            id: "2",
            serviceName: "Fmc Badminton",
            serviceType: "Badminton"
        },
        {
            id: "3",
            serviceName: "Snh Badminton",
            serviceType: "Archery"
        },
        {
            id: "4",
            serviceName: "Gnh Bandminton",
            serviceType: "Basketball"
        }
    ]);

    //USEEFFECT HOOK FOR SIDE EFFECTS
    useEffect(() => {

    }, [])

    const cards = getServices.map((card, index) => {
        return (
            <Link to={`/detailedServices/${card.serviceType}/${index}`}>
                <div key={index} className="Card">
                    <div className="SportPic" style={{ backgroundImage: "url(" + image + ")" }}>

                    </div>
                    <p>{card.serviceType}</p>
                </div>
            </Link>
        );
    });

    return (
        <Fragment>
            {cards}
        </Fragment>
    )
}
