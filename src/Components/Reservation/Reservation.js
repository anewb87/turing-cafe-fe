import React from 'react';
import './Reservation.css'

const Reservation = ({ name, date, time, number, id, deleteReservation }) => {
    return (
        <div className='reservation-card'>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of guests: {number}</p>
            <button className='cancel-btn' onClick={() => deleteReservation(id) }>Cancel</button>
        </div>

    )
}

export default Reservation;