export * from './user';
import {IUserHydrated} from './user';


export interface UsersDict {
    [email:string]: IUserHydrated
  }