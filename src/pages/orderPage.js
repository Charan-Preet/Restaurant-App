import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Link } from 'react-router-dom'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function OrderPage() {
    const data = useStoreState(state => state.order.Orders)
    const previousOrdersStore = useStoreActions(action => action.previous.addTopreviousOrders)
    function createNotification() {
        NotificationManager.success('Success message', 'Title here');
    }

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
                <h1>Meal Options From:{data[data.length - 1][0]}({data[data.length - 1][1]})</h1> <br />
                <ol>
                    {data[data.length - 1].slice(3).map((item, idx) => {
                        return (
                            <div>
                                <h4>{item}</h4> <button
                                    onClick={async () => {
                                        await previousOrdersStore(item)
                                        createNotification()
                                    }}
                                >
                                    Order</button><hr />
                            </div>
                        )
                    })}
                </ol>
                <NotificationContainer />
            </div>
        )
}