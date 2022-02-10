import { takeLatest } from "redux-saga/effects";
import { exampleAction } from "./actions";

function myFunc(){
console.log('I am a redux action interceptor, aka: redux saga!');
}

export function* homeSaga(){
yield takeLatest(exampleAction, myFunc)
} 