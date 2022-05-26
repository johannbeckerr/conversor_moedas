import React, { Component } from "react";
import './App.css';
import Conversor from "./components/Conversor";

class App extends Component {
  render(){
    return (
      
      <div className="App">
        <h1>Conversor</h1>
        <div className="linha">
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        </div>
        <div className="linha">
          <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
          <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        </div>
      </div>
    );
  }
}

export default App;