import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitResy = (e) => {
        e.preventDefault();
        const newResy = {
            id: Date.now(),
            ...this.state
        }
        this.props.addReservation(newResy);
        this.clearInputs()
    }


    clearInputs = () => {
        this.setState({
            name: '',
            date: '',
            time: '',
            number: ''
        })
    }


    render() {
        return (
            <form>

                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e)}
                />

                <input
                    type='text'
                    placeholder='Date (mm/dd)'
                    name='date'
                    value={this.state.date}
                    onChange={(e) => this.handleChange(e)}
                />

                <input
                    type='text'
                    placeholder='Time'
                    name='time'
                    value={this.state.time}
                    onChange={(e) => this.handleChange(e)}
                />

                <input
                    type='number'
                    min='0'
                    placeholder='Number of guests'
                    name='number'
                    value={this.state.number}
                    onChange={(e) => this.handleChange(e)}
                />

                <button onClick={(e) => this.submitResy(e)}>Make Reservation</button>

            </form>
        )
    }
}


export default Form;