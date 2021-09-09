import React from 'react'

export default (props) => {
    return (
        <label className="consulta-passo">
                    <label htmlFor="passo">Passo:</label>
                    <input id="passo" type="number" value={props.passo} onChange={props.setPasso}/>
        </label>
    )
}