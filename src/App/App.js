import React, { Component } from 'react';
import ResyContainer from '../Components/ResyContainer/ResyContainer';
import Form from '../Components/Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }


  componentDidMount =() => {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState( {reservations: data} ))
      .catch(error => console.log(error))
  }

  addReservation = (newResy) => {
    this.setState({ reservations: [...this.state.reservations, newResy] })
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <ResyContainer reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
