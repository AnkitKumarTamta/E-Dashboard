import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

      const auth =  localStorage.getItem("user");
      if(auth)
      {
        navigate("/")
      }

      
    })
    

    const handleClick = async()=>{
        console.log(email,password)
        let result = await fetch("http://localhost:5000/login",{
            method: "post",
            body: JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        })

        result = await result.json();
        console.log(result)

        if(result.name)
        {
             localStorage.setItem('user',JSON.stringify(result))
             navigate("/");
        }
        else
        {
            alert("Please enter correct details")
        }
    }
  return (
    <div className='login'>
    <h1>Login</h1>
    <input className='inputbox' onChange={(e)=>setEmail(e.target.value)} value={email} type='text' placeholder='Enter Email' />
    <input className='inputbox' onChange={(e)=>setPassword(e.target.value)} value={password}  type='password' placeholder='Enter Password' />
    <button type='button' onClick={handleClick}  className='appButton'>Login</button>
</div>
  )
}

export default Login