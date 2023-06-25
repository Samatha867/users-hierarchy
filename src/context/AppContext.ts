import { createContext } from 'react';

export type RoleType = {
  Id: number;
  Name: string;
  Parent: number;
};

export type UserType = {
  Id: number;
  Name: string;
  Role: number;
};

export type AppContextType = {
  roles: RoleType[];
  users: UserType[];
};

export default createContext<AppContextType>({
  roles: [],
  users: [],
});
