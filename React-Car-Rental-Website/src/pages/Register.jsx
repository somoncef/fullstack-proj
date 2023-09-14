import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [adress, setadress] = useState("");
  const [number, setnumber] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user", {
        name: name,
        email: email,
        username: username,
        password: password,
        number:number,
        adress:adress
      });
      alert("User Registration Successful");
      console.log(response);
      navigate('/home');
    } catch (err) {
      toast.error(err, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });  
    }
  }

  return (
    <div>
      <div className="container mt-4">
        <div className="card">
          <h1>Registration</h1>
          <form>
          <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter Username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>number</label>
              <input
                type="number"
                className="form-control"
                id="number"
                placeholder="Enter number"
                value={number}
                onChange={(event) => {
                  setnumber(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>adress</label>
              <input
                type="adress"
                className="form-control"
                id="adress"
                placeholder="Enter adress"
                value={adress}
                onChange={(event) => {
                  setadress(event.target.value);
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4" onClick={save}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
