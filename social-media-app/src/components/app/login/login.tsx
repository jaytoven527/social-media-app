import Input from '../../inputs/inputs';
import { IUser, ILogin, IUserHydrated} from '../../../types';
import {useState, useCallback } from 'react';


type UserLoginData = IUserHydrated;

export default function LogInForm ({onSubmit, users}: {onSubmit: (val: UserLoginData) => void, users: {[key:string]: IUserHydrated} }) {
  const [email, setEmail]                       = useState('');
  const [emailError, setEmailError]             = useState('');
  const [password, setPassword]                 = useState('');
  const [passwordError, setPasswordError]       = useState('');
  
  return (
    <form onSubmit={e => {
        e.preventDefault();
        
        if(!password) {
          // alert('need to add password');
          setPasswordError('Need to add a password')
          return;
        }
        if(!email) {
          // alert('need to add email');
          setEmailError('Need to add an email')
          return;
        }

        const userAttempt = users[email];

        if(!userAttempt) {
          setEmailError('There is no account associated with this email');
          return;
        }

        if(password !== userAttempt.login?.password ) {
            // alert('Password is incorrect');
            setPasswordError('Password is incorrect')
            return;
        }

        onSubmit(userAttempt);
      }}>
          <Input placeholder={'Email'} name="email" onChange={setEmail} value={email}/>
          <pre>{emailError}</pre>
          <Input placeholder={'Password'} name="password" type="password" onChange={setPassword} value={password}/>
          <pre>{passwordError}</pre>
        <button>Submit</button>
      </form>
    );
  }
  
  

