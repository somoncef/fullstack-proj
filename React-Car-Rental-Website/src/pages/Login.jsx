import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Login() {
    
   
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/auth/login", {
                username: username,
                password: password,
            });

            const token = response.data.token;
            const usernamee=response.data.username;

            if (response.data.username === username) {
                localStorage.setItem("token", token);
                localStorage.setItem("username", usernamee);

console.log(username,password);
                navigate('/home');
                window.location.reload();
            } else {
                alert("Incorrect Email and Password not match");
            }
        } catch (err) {
            alert(err);
        }
    }
    return (
       <div>
            <div class="container">
            <div class="row">
                <h2>Login</h2>
             <hr/>
             </div>
             <div class="row">
             <div class="col-sm-6">
 
            <form>
        <div class="form-group">
          <label>username</label>
          <input type="username"  class="form-control" id="username" placeholder="Enter Name"
          
          value={username}
          onChange={(event) => {
            setusername(event.target.value);
          }}
          
          />
        </div>
        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter Password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
                  <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
              </form>
            </div>
            </div>
            </div>
     </div>
    );
  }
  
  export default Login;