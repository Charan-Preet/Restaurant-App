import { createStore, persist } from 'easy-peasy';
import orderModel from '../model/orderModel'
import previousOrderModel from '../model/previousOrderModel'

const store = createStore(
    persist(
        {
            order: orderModel,
            previous: previousOrderModel,
        },
        {
            allow: ['previous'],
        },
    ),
);


export default store