import { homeSaga } from "./home/saga";
import { all, fork } from 'redux-saga/effects'
import { boilerPlateSaga } from "./boilerPlate/saga";


export default function* rootSaga() {
    yield all([
      fork(homeSaga),
      fork(boilerPlateSaga)
    ])
  }