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

  componentDidMount = () => {
    this.getReservations()
  }

  getReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({ reservations: data }))
      .catch(error => console.log(error))
  }

  postReservation = (newResy) => {
    return fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify(newResy),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => this.getReservations())
      .catch(error => console.log(error));
  }

  deleteReservation = (id) => {
    return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => this.getReservations())
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.postReservation}/>
        <ResyContainer reservations={this.state.reservations} deleteReservation={this.deleteReservation}/>
      </div>
    )
  }
}

export default App;
