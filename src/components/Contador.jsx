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

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>Valor Atual: {this.state.numero}</h3>
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }
} 