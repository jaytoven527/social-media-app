import { UserSignupForm } from "./app/signup/Signup"
import LogInForm from "./app/login/Login"

export function UserAccountActionForms({users, submitSignUp, setLoggedInUser}) {
    return (
      <>
        <section> 
          <UserSignupForm onSubmit={submitSignUp}></UserSignupForm> 
        </section>
        <section>
          {Object.entries(users).length ? <LogInForm users={users} onSubmit={setLoggedInUser}></LogInForm> : null}
        </section>
      </>
    )
  }