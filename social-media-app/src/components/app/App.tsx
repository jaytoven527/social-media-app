import logo from '../../logo.svg';
import './App.css';
import {IUser, ILogin, IUserHydrated} from '../../types'
import {useState, useCallback} from 'react';
import Input from '../inputs/inputs';

export type UserSignupData = {
  email:     string;
  firstName: string;
  lastName:  string;
  password:  string;
};

function UserSignupForm({onSubmit}: {onSubmit: (val: UserSignupData) => void}) {
  const [email, setEmail]                       = useState('');
  const [firstName, setFirstName]               = useState('');
  const [lastName, setLastName]                 = useState('');
  const [password, setPassword]                 = useState('');
  const [passwordConfirm, setPasswordConfirm]   = useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault();

      if(!password) {
        alert('need to add password');
        return;
      }
      if(password !== passwordConfirm) {
        alert('need to confirm password');
        return;
      }
      onSubmit({ email, firstName, lastName, password });
    }}>
        <Input placeholder={'Email'} name="email" onChange={setEmail} value={email}/>
        <Input placeholder={'First Name'} name="firstName" onChange={setFirstName} value={firstName}/>
        <Input placeholder={'Last Name'} name="lastName" onChange={setLastName} value={lastName}/>
        <Input placeholder={'Password'} name="password" type="password" onChange={setPassword} value={password}/>
        <Input placeholder={'Confirm Password'} name="confirmPassword" type="password" onChange={setPasswordConfirm} value={passwordConfirm}/>
      <button>Submit</button>
    </form>
  )
}

interface UsersDict {
  [email:string]: IUserHydrated
}



let loginIdCounter  = 0;
const loginIdMap = {} as {[userId: number]: number};
const getLoginId = (userId:number) => {
  return loginIdMap[userId] = loginIdMap[userId] ?? (loginIdCounter++)
}


let userIdCounter  = 0;
const userIdMap = {} as {[email: string]: number};
const getUserId = (email: string) => {
  return userIdMap[email] = userIdMap[email] ?? (userIdCounter++)
}

export function signUserUp(data: UserSignupData) : {
  user: IUser;
  login: ILogin;
} {
  const {email, firstName, lastName, password} = data;

  const userId        = getUserId(email);
  const user: IUser   = {
    id: userId,
    email,
    firstName,
    lastName
  };
  const login: ILogin = {
    id: getLoginId(userId),
    userId,
    password,
    verified: false
  };

  return { user, login }
}

type IUserLoginData  = {
  username: string;
  password: string;
}

function logUserIn({username, password}:IUserLoginData, usersDict: UsersDict) : IUser{
  const whichOne :string = 'poopoopeepee';


  
  // find the user based on some user identifier
  const user = usersDict[whichOne];
  if (!user ) {
    throw new Error('Could not find user with that [...]');
  }

  const {login} = user;

  if (!login) {
    throw new Error('Could not find user with that [...]')
  }

  // throw an error if the login information is incorrect
  const condition = false;
  if (!condition) {
    throw new Error('Invalid login credentials')
  }


  return user;
}


function App() {
  const [users, setUsers] = useState({} as  UsersDict);
  const [state, setState] = useState(null as any);
  const [loggedInUser, setLoggedInUser] = useState( null as IUser | null);


 const submitSignUp = (data) => {
    const {user, login} = signUserUp(data);
    setUsers({
      ...users,
      [user.email]: {
        ...user,
        login
      }
    })
  }

console.log(signUserUp)
  return (
    <div className="App">
      <pre>{JSON.stringify(users, null, 3)}</pre>
      <UserSignupForm onSubmit={submitSignUp}></UserSignupForm>
    </div>
    
  );
}

export default App;
