import React, {useState,useEffect} from 'react'
import LoginForm from './components/LoginForm'
import axios from "axios";


function App() {
  
  const admniUser = {
    email: 'paulo@sapo.pt',
    passowrd: '12345'
  }

  const [person, setPerson] = useState([])

  const fectchData = () => {
      
    axios.get("http://localhost/db-meeting-point/Users/all-users.php")
     .then((res) => {
        setPerson(res.data.users.map(el => el ))
    })
    .catch(err => {
        console.log(err)
    }
)
}

useEffect(() => {
  fectchData()
  
}, [])



  const [user, setUser] = useState({user:""})
  const [error, setError] = useState("");

  const Login = details => {
  
    person.map((user) => {
      
      if(details.name == user.user_name && details.password == user.user_passowrd) {
      setUser({
        name: details.name
      })
    } else {
      setError('Details do not match')
      }
  }
    )
}
    

  

  const Logout = () => {
    setUser({
      user:""
    })
    setError('')
  }

  return (
    <div className="App">
      {(user.user != "") ? (
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