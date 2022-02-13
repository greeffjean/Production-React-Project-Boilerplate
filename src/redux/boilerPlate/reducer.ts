import { createReducer } from "redux-act";
import { TData } from "../../types/commonTypes";
import {
    requestBoilerPlateData,
    requestBoilerPlateDataSuccess,
    requestBoilerPlateDataFail
} from "./actions";


export type TBoilerPlateState = {
    isLoading: boolean,
    error: any | null,
    data: TData | null
}

const defaultState: TBoilerPlateState  = {
    isLoading: false,
    error: null,
    data: null
}

export const boilerPlateReducer = createReducer({}, defaultState)

// Action Calls => 
boilerPlateReducer.on(requestBoilerPlateData, (state) => ({
    ...state,
    isLoading: true
})).on(requestBoilerPlateDataSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    data: payload
})).on(requestBoilerPlateDataFail, (state, err) => ({
    ...state,
    isLoading: false,
    error: err
}));