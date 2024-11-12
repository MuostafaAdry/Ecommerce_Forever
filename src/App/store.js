import { configureStore } from "@reduxjs/toolkit";

import productsitemsreducer from '../redux/productsitems/productSlice'

const store=configureStore({
    reducer:{
        productsitems:productsitemsreducer
    }
})

export default store;