import React from 'react'

export default props => {
    return (
        <div className="button-mais-menos">
            <button onClick={props.dec}>-</button>
            <button onClick={props.inc}>+</button>
        </div>
    )
}