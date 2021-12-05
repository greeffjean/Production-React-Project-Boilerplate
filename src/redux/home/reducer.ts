import { createReducer } from "redux-act";
import { exampleAction } from "./actions";


export type THomeState = {
    isLoading: boolean,
    error: any,
    data: [{[key: string]: string | number}] | []
}

const defaultState: THomeState  = {
    isLoading: false,
    error: '',
    data: []
}

export const homeReducer = createReducer({}, defaultState)

// Action Calls => 
homeReducer.on(exampleAction, (state) => ({
    ...state
}));