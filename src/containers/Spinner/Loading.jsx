import React from 'react'

import './Loading.css'

const Loading = () => {
    return (
        <div className="h-screen" style={{paddingTop: "30%"}}>
            <div className="lds-roller align-middle"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}


export default Loading