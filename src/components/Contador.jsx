import React, { Component } from 'react'
import './Contador.css'

import Display from './Display';
import PassoCampo from './PassoCampo';
import Botoes from './Botoes';

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

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display valor={this.state.numero} />
                <Botoes setInc={this.inc} setDec={this.dec} />
                <PassoCampo passo={this.state.passo} setPasso={this.setPasso}/>
            </div>
        )
    }
} 