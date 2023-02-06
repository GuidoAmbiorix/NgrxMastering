import { User } from "src/app/interfaces/user";

export interface AuthState{
  user:User | null
}


export const initialState:AuthState = {
  user:null,
};
