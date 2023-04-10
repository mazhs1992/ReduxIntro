
// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from './counter'
import authSliceReducer from './auth'


// const ReduxReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'increaseby5') {
//         return {
//             counter: state.counter + action.payload,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state
// }

//create store
const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        auth: authSliceReducer
    }
})




export default store;