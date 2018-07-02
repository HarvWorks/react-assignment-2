////////////////////////////////////////////////////////////
//                        Input.js                        //
////////////////////////////////////////////////////////////
import React from 'react'

const input = (props) => {
    return (
        <div className="input">
          <input type="text" onChange={props.changed} value={props.value}/>
        </div>
    )
}

export default input;
