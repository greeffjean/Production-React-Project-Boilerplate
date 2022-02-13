import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import {
  requestBoilerPlateData,
  requestBoilerPlateDataSuccess,
  requestBoilerPlateDataFail,
} from "./actions";

function* myFunc() {
  let data: any;
  let error: any;

  yield axios
    .get("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
    .then((resp) => {
      data = resp.data.toString();
    })
    .catch((err) => {
      error = err;
    });

  yield !error && data && put(requestBoilerPlateDataSuccess(data));
  yield error && !data && put(requestBoilerPlateDataFail(error));
}

export function* boilerPlateSaga() {
  yield takeLatest(requestBoilerPlateData, myFunc);
}
