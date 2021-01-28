import React from 'react'
import Booking from '../../components/Checkout/Booking/Booking'
import Payment from '../../components/Checkout/Payment/Payment'
import StepBar from '../../components/Checkout/StepBar/StepBar'
import './Checkout.scss'

export default function Checkout() {
    return (
        <div id="checkout">
            <StepBar />
            <div className="bg-film d-none d-md-block"></div>
            <Booking />
            <Payment />
        </div>
    )
}
