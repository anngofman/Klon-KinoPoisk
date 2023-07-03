import { LoaderActionType } from "./types";

export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const startLoading = ():LoaderActionType => ({
  type: START_LOADING
});

export const stopLoading = ():LoaderActionType => ({
  type: STOP_LOADING
});