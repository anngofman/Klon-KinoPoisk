export type ResetPassStateType={
  isLoading: boolean
  error: string | null 
  isSuccess: boolean
}

export type ResetPassActionType = {
  type: string
  payload?: string
}