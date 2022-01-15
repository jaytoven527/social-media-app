import Input from '../../inputs/inputs';
import {UserSignupData} from '../../app/App'
import {IUser, ILogin, IUserHydrated} from '../../../types'
import { signUserUp } from '../../app/App';
import {useState, useCallback} from 'react';


export default function LogInForm ({onSubmit}: {onSubmit: (val: UserSignupData) => void}) {
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
        if(email !== ) {
            alert('There is no account associated with this email ');
            return;
        }
        if(password !==  ) {
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
  
  

