import { action } from 'easy-peasy'

const orderModel = {
    restaurantlist: [],
    addTorestaurantlist: action((state, payload) => {
        state.restaurantlist.push(payload)
    }),

    Orders: [],
    addToOders: action((state, payload) => {
        state.Orders.push(payload)
    }),
}

export default orderModel
