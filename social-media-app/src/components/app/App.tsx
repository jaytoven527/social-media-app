import logo from '../../logo.svg';
import './App.css';
import {IUser, UsersDict} from '../../types'
import {useState, useCallback} from 'react';
import Input from '../inputs/inputs';
import { UserAccountActionForms } from '../UserAccountActionForms';
import { Greeting } from '../Greeting';
import {UserSignupForm, signUserUp} from './signup/Signup'


function App() {
  const [users, setUsers]               = useState({} as  UsersDict);
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

  return (
    <div className="App">
      <div className="userAction-container">
        {
          !loggedInUser 
          ? 
            <UserAccountActionForms 
              users={users} 
              submitSignUp={submitSignUp} 
              setLoggedInUser={setLoggedInUser} 
            />
          : <Greeting user={loggedInUser}/>
        }
      </div>
    </div>
  );
}

export default App;
