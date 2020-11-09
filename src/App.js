import React, {useState} from 'react'
import LoginForm from './components/LoginForm'

function App() {
  const admniUser = {
    email: 'paulo@sapo.pt',
    passowrd: '12345'
  }

  const [user, setUser] = useState({user:"", email: ""})
  const [error, setError] = useState("");

  const Login = details => {
  

    if(details.email == admniUser.email && details.password == admniUser.passowrd) {
      console.log('Logged In')
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      setError('Details do not match')
      }
  }

  const Logout = () => {
    setUser({
      user:"", email: ""
    })
  }

  return (
    <div className="App">
      {(user.email != "") ? (
          <div className="welcome">
              <h2> Welcome, <span>{user.name}</span></h2>
              <button onClick={Logout}>Log Out</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        ) }
    </div>
  );
}

export default App;
