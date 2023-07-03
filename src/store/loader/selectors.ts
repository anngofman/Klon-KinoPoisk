import { AppState } from "..";

export const isLoadingSelector = ((state: AppState)=> state.loader.isLoading)