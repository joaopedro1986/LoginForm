import React, {useState} from 'react'

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name: "", password: ""})

    const submitHanddler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHanddler}>
            <div className='form-inner'>
                <h2>Login</h2>
                {(error != "") ? (<div className='error'> {error} </div>) : ""}
                <div className='form-group'>
                    <label htmlFor="name">Nme: </label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
              
                <div className='form-group'>
                    <label htmlFor="name">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}  />
                </div>
                <input type="submit" value="Login" />

            </div>
        </form>
    )
}

export default LoginForm;
