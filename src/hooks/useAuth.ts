import { useSelector } from "react-redux";
import { AppState } from "../store";

export const useAuth = ()=>{
  const {email, id} = useSelector((state:AppState)=>state.auth)

  return {
    isAuth: !!email,
    email,
    id
  }
}