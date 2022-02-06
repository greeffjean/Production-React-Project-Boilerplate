import { createReducer } from "redux-act";
import { exampleAction } from "./actions";


export type THomeState = {
    isLoading: boolean,
    error: any | null,
    data: [{[key: string]: string | number}] | null
}

const defaultState: THomeState  = {
    isLoading: false,
    error: null,
    data: null
}

export const homeReducer = createReducer({}, defaultState)

// Action Calls => 
homeReducer.on(exampleAction, (state) => ({
    ...state
}));