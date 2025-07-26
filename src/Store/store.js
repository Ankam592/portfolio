import React from "react";
import reducer from "./ThemeSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer :{
         theme: reducer 
}
})

export default store;