import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

function useLogin() {
  const value = useSelector((state: RootState) => state.auth);

  return value;
}

export default useLogin;
