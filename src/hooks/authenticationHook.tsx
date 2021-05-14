import { useAppSelector } from "src/redux/hooks";
import { RootState } from "src/redux/store";

export const UserIsLoggedIn = () => {
  const auth = useAppSelector((state: RootState) => state.auth);
  return !!auth.token;
};
