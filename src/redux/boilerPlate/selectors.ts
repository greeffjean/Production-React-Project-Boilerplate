import { TAppState } from "../../types/appState";

export const selectBoilerPlateIsLoading = (state: TAppState) => state.boilerPlate.isLoading;

export const selectBoilerPlateData = (state: TAppState) => state.boilerPlate.data;
export const selectBoilerPlateError = (state: TAppState) => state.boilerPlate.error;
