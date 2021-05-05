import React from 'react'
import { useStoreState } from 'easy-peasy'
import { Link } from 'react-router-dom'

export default function PreviousOrders() {
    const orders = useStoreState(state => state.previous.previousOrders)
    function nav() {
        return (
            <div className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/previous-orders'>Previous Orders</Link>
            </div>
        )
    }
    if (orders.length === 0)
        return (
            <div>
                {nav()}
                <h2>You Have no Previous order yet!</h2>
            </div>
        )
    else
        return (
            <div>
                {nav()}
                {orders.map((item, idx) => {
                    return (
                        <ol>
                            <h4>{item}</h4> <hr />
                        </ol>
                    )
                })}
            </div>
        )

}