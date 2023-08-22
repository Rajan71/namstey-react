import React from 'react'
import { useRouteError } from 'react-router-dom'  //useRouteError is a hook used to give the error information

const Error = () => {
    const err = useRouteError()
    return (
        <div>
            <h1>Opps!!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}

export default Error