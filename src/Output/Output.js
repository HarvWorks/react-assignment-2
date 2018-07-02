////////////////////////////////////////////////////////////
//                       Output.js                        //
////////////////////////////////////////////////////////////
import React from 'react'

const output = (props) => {
    return <p onClick={props.click}>{props.value}</p>
}

export default output;
