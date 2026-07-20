import{configureStore} from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice.jsx"
import {apiSlice} from "./slices/apiSlice.jsx"

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:authReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware)
})
export default store;