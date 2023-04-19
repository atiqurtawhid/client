import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Register =  ()=>{
	const navigate = useNavigate()
	const [username, setUsername]=useState("")
	const [password, setPassword]=useState("")
	
	const handle = async()=>{
		try{
	await	axios.post("http://localhost:4000/register", {username, password})
		.then(()=>{
			console.log("User Registration Successful")
			navigate("/login")
		})
		
		.catch((err)=>{
			navigate("/register")
			console.log(err)
			console.log("not register")
		})
		
		}
		
		
		catch(err){
			console.log(err)
		}
			
		
		
	}
	
  return (
    <div>
      <h1> Register </h1>
      <input type="text" value={username}  onChange={(e)=>{setUsername(e.target.value)}} required/>
      <br/>
      <input type="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}} required/>
      <br/>
      <button onClick={handle} type="submit">Register</button>
      
    </div>
  );
}

export default Register;