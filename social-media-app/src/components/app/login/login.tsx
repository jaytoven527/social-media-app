import Input from '../../inputs/inputs';
import App, {UserSignupData, UsersDict} from '../../app/App'
import { IUser, ILogin, IUserHydrated} from '../../../types';
import {useState, useCallback } from 'react';



export default function LogInForm ({onSubmit, users}: {onSubmit: (val: UserSignupData) => void, users: IUserHydrated }) {
  const [email, setEmail]                       = useState('');
  const [password, setPassword]                 = useState('');
  
  return (
    <form onSubmit={e => {
        e.preventDefault();
        
        if(!password) {
          alert('need to add password');
          return;
        }
        if(!email) {
            alert('need to add email');
            return;
        }
        if(email !== users.email ) {
            alert('There is no account associated with this email ');
            return;
        }
        if(password !== users.login?.password ) {
            alert('Password is incorrect');
            return;
        }

        onSubmit({ email, password,  firstName: '', lastName: '' });
      }}>
          <Input placeholder={'Email'} name="email" onChange={setEmail} value={email}/>
          <div><span></span></div>
          <Input placeholder={'Password'} name="password" type="password" onChange={setPassword} value={password}/>
          <div><span></span></div>
        <button>Submit</button>
      </form>
    );
  }
  
  

