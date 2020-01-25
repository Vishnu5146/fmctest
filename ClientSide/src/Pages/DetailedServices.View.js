import React from 'react'
import {
    useParams
} from "react-router-dom";

export default function DetailedServicesView() {


    let { id, service } = useParams()

    return (
        <div>
            <p>Detailed {service} page {id}</p>
        </div>
    )
}
