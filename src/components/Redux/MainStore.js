import { configureStore } from "@reduxjs/toolkit";
import GridFunctions from "./Functions";


const Store= configureStore({reducer:{GridStore:GridFunctions.reducer}});

export default Store;