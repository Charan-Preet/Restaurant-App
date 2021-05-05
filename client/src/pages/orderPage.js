import React, { useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Link } from 'react-router-dom'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';


export default function OrderPage() {
    const data = useStoreState(state => state.order.Orders)
    const previousOrdersStore = useStoreActions(action => action.previous.addTopreviousOrders)

    if (data.length < 1) {
        return (
            <div>
                <div className='navbar'>
                    <Link to='/'>Home</Link>
                    <Link to='/previous-orders'>Previous Orders</Link>
                </div>
                <h1>Search for Restaurant In The Homepage First...</h1>
            </div>
        )
    } else

        return (
            <div>
                <div className='navbar'>
                    <Link to='/'>Home</Link>
                    <Link to='/previous-orders'>Previous Orders</Link>
                </div>

                <div className='list'>
                    <h1>Meal Options From:{data[data.length - 1][0]}({data[data.length - 1][1]})</h1> <br />
                    <ol>
                        {data[data.length - 1].slice(3).map((item, idx) => {
                            return (
                                <div>
                                    <h4>{item}</h4> <button className='btn'
                                        onClick={async () => {
                                            await previousOrdersStore(item)
                                            NotificationManager.success("Check Previous Orders", "Order Successful")
                                        }}
                                    >
                                        Order</button><hr />
                                </div>
                            )
                        })}
                    </ol>

                </div>
                <NotificationContainer />
            </div>
        )
}