import React from 'react';
import { AuthorizeResponse } from '@deriv/api-types';
export interface IUserLoginAccount {
  name: string;
  token: string;
  currency: string;
}

export type IUserAccounts = AuthorizeResponse['authorize']['account_list'];
export type IUser = Omit<AuthorizeResponse['authorize'], 'account_list'>;

export interface IAuthContext {
  is_switching_account: boolean;
  is_logged_in: boolean;
  is_authorized: boolean;
  loginAccounts: IUserLoginAccount[];
  updateLoginAccounts: (userAccounts: IUserLoginAccount[]) => void;
  currentLoginAccount: IUserLoginAccount;
  updateCurrentLoginAccount: (userAccount: IUserLoginAccount) => void;
  userAccounts: IUserAccounts;
  user: IUser;
  updateAuthorize;
}

export const AuthContext = React.createContext<IAuthContext | null>(null);
