import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import {
    requestBoilerPlateData,
    requestBoilerPlateDataSuccess,
    requestBoilerPlateDataFail
} from "./actions";

function myFunc(){
    axios.get(
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
      ).then((resp) => {
        resp.status === 200 && put(requestBoilerPlateDataSuccess(resp.data))
      }).catch((err) => put(requestBoilerPlateDataFail(err)))
}

export function* boilerPlateSaga(){
yield takeLatest(requestBoilerPlateData, myFunc)
} 