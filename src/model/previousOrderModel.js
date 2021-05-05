import { action } from 'easy-peasy'

const previousOrderModel = {
    previousOrders: [],
    addTopreviousOrders: action((state, payload) => {
        state.previousOrders.push(payload)
    }),
}

export default previousOrderModel