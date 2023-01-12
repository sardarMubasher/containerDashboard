import {configureStore, createSlice, } from '@reduxjs/toolkit'
import { Action } from '@remix-run/router'




export const darkMode = createSlice(
    {
        name:'darkMode',
        initialState:{
            value:false,
        },
        reducers:{
            switchMode:(state,Action)=>{
               state.value = Action.payload
            }
        }

    }
)

export const userAuth = createSlice(
    {
        name:'userAuth',
        initialState:{
            value:localStorage.getItem('isLoggedIn'),
        },
        reducers:{
            switchAuth:(state,Action)=>{
               state.value = Action.payload
            }
        }

    }
)


export const Store = configureStore(
    {
        reducer:{
            darkMode:darkMode.reducer,
            userAuth:userAuth.reducer
        }
    }
    
)