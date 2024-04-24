import { PrivilegesEnum } from "../_generated_gql_/graphql.ts";
import { useSelector } from "react-redux";
import { selectPrivileges } from "../redux/features/auth/userSlice.ts";

export const useHasAuthorities = (authority: PrivilegesEnum) => {
  const authorities = useSelector(selectPrivileges);
  return authorities?.some((item) => item == authority);
};
