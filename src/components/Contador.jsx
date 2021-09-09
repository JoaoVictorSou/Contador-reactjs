import React, { Component } from 'react'
import './Contador.css'

export default class Contador extends Component {
    
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInformado || 1
            
    };
    
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>Valor Atual: <span className="valor">{this.state.numero}</span></h3>
                <input type="number" value={this.state.passo} onChange={this.setPasso}/>
                <div className="button-mais-menos">
                    <button onClick={this.dec}>-</button>
                    <button onClick={this.inc}>+</button>
                </div>
            </div>
        )
    }
} 