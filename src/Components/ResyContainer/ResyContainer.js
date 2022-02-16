import React from 'react'
import Reservation from '../Reservation/Reservation'
import './ResyContainer.css'

const ResyContainer = ({ reservations }) => {

    const reservationCards = reservations.map(reservation => {
        return (
            <Reservation 
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number}
                id={reservation.id}
                key={reservation.id}
            />
        )
    })
    return(
        <div className='resy-container'>
            {reservationCards}
        </div>
    )

}

export default ResyContainer