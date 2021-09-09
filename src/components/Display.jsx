import React from 'react'

export default (props) => {
    return (
        <div className="Display">
            <h3>Valor Atual: <span className="valor">{props.valor}</span></h3>
        </div>
    )
}