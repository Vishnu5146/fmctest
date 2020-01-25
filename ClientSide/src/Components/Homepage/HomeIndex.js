import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


//IMPORTING DROPDOWN COMPONENT
import DropdownView from '../../SupportComponents/Dropdown.View'
import CardsView from '../Homepage/Cards.View'

export default function HomeIndex() {
    return (
        <Fragment>
            <div className="column">
                <div className="InputBox_Container">
                    <div className="SelectBox_Container">
                        <DropdownView />
                        <i className="fas fa-angle-down"></i>
                    </div>
                    <input className="InputBox" placeholder="Search Court or Sport" type="text" />
                    <button className="SearchButton"><i className="fas fa-search"></i></button>
                </div>
                <div className="CardContainer">
                    <CardsView />
                </div>
                <div className="container">
                    <div className="nib"><Link to="/allservices"><p>See More</p></Link></div>
                </div>
            </div>
        </Fragment>
    )
}
