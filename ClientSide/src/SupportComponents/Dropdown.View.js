import React, { Fragment, useEffect, useState } from 'react'


export default function DropdownView() {

    const [getData, setData] = useState([]);
    const [getSelectedPlace, setSelectedPlace] = useState("Select Place")
    const [getShowDropdown, setShowDropdown] = useState(false)

    const togglePlace = (data) => {
        setSelectedPlace(data);
        setShowDropdown(!getShowDropdown);
    }

    useEffect(() => {
        //setShowDropdown(false);
        setData(["Pollachi", "Coimbatore", "Banglore", "Udumalpet"])
        console.log("Clicked")
    }, [])

    const UI = getData.map((data, index) => {
        return (<p className="list" onClick={() => { togglePlace(data) }} key={index}>{data}</p>);
    });


    return (
        <Fragment>
            <div className="Selector_container">
                <div className="selector" onMouseEnter={() => setShowDropdown(!getShowDropdown)} onClick={() => { setShowDropdown(!getShowDropdown) }}>
                    {getSelectedPlace}
                </div>
                <div className={getShowDropdown ? "dropdown" : "hidden"}>
                    {UI}
                </div>
            </div>
        </Fragment>
    )
}
