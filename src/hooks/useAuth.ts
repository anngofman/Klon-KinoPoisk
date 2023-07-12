import { useSelector } from "react-redux";
import { AppState } from "../store";

export const useAuth = ()=>{
  const {email, id,token, name} = useSelector((state:AppState)=>state.auth)

  return {
    isAuth: !!email,
    email,
    id,
    token,
    name
  }
}