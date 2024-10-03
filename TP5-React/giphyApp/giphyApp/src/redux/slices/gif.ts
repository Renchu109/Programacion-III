import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IGif } from '../../types/gif'

// Define a type for the slice state
interface IInitialState {
    gif: IGif[]
}

// Define the initial state using that type
const initialState: IInitialState = {
    gif:[]
}

const gifsSlice = createSlice({
    name: 'gifState',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setGifs: (state, action: PayloadAction<IGif[]>) => {
            state.gif = action.payload
        },

        resetGifs: (state) => {
            state.gif = []
        }
    },
})

export const {setGifs, resetGifs} = gifsSlice.actions

export default gifsSlice.reducer