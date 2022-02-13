import { createAction } from 'redux-act';

export const requestBoilerPlateData = createAction('REQUEST_BOILERPLATE_DATA');
export const requestBoilerPlateDataSuccess = createAction<any>('REQUEST_BOILERPLATE_DATA_SUCCESS');
export const requestBoilerPlateDataFail = createAction<any>('REQUEST_BOILERPLATE_DATA_FAIL');