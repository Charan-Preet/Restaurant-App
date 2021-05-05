import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Link, useHistory } from "react-router-dom"

export default function Restaurant() {
    const restaurantlist = useStoreState(state => state.order.restaurantlist)
    const orders = useStoreActions(actions => actions.order.addToOders)
    const history = useHistory()

    function navbar() {
        return (
            <div className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/previous-orders'>Previous Orders</Link>
            </div>
        )
    }
    
    const orderPage = (item) => {
        orders(item)
        history.push("/order-page")
    }

    if (restaurantlist.length === 0) {
        return (
            <div>
                {navbar()}
                <h2>Try Search for Restaurant's at Homepage first...</h2>
            </div>
        )
    }
    else if (restaurantlist.length > 0) {
        return (
            <div>
               {navbar()}

                <div>
                    {restaurantlist[restaurantlist.length - 1].map((item, idx) => (
                        <ul>
                            <button onClick={() => orderPage(item)} > {item[0]}</button><br />
                            <p>Restaurant Timing: {item[1]}</p>
                            <p>Off Days: {item[2]}</p>
                            <hr />
                        </ul>
                    ))}
                </div>
            </div>
        )
    }
}