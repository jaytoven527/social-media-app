import { IUser } from "../types"

export function Greeting({user} : {user: IUser}) {
    return `Welcome, ${user.firstName}`
  }