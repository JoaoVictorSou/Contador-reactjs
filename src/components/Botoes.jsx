import React from 'react'

export default props => {
    return (
        <div className="button-mais-menos">
            <button onClick={props.setDec}>-</button>
            <button onClick={props.setInc}>+</button>
        </div>
    )
}