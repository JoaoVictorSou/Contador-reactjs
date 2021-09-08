import React, { Component } from 'react'

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
            <div>
                <h2>Contador</h2>
                <h3>Valor Atual: {this.state.numero}</h3>
                <input type="number" value={this.state.passo} onChange={this.setPasso}/>
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }
} 