import React, { Component } from "react";
import './Conversor.css';
import { FiSearch } from 'react-icons/fi';
import { SiConvertio } from "react-icons/si";

export default class Conversor extends Component{
    constructor(props){
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: ".",
        }
        this.converter = this.converter.bind(this);
    }

    converter(){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        //let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=y`
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=aa88017ec0191739ecd6`

        fetch(url).then(res=>{
            return res.json()
        }).then(json=>{
            let cotacao = json[de_para];
            let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2); 
            this.setState({moedaB_valor})
        })
    }

    render(){
        return(
            <div className="conversor">
                <h2>{this.props.moedaA} / {this.props.moedaB}</h2>
                <div className="containerInput">
                    <input type="text" onChange={(e)=>{this.setState({moedaA_valor:e.target.value})}}></input>
                    <button className="buttonConversor" type="button" value="Converter" onClick={this.converter}><SiConvertio size={50} color="#000"/></button>
                </div>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}