import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

   
    

    const collectdata = async ()=>{
      let result = await fetch('http://localhost:5000/register',{
        method: 'post',
        body: JSON.stringify({name,email,password}),
        headers:{
          'Content-Type': 'application/json'
        },
      });

      result = await result.json();
        console.log(result)

        localStorage.setItem("user",JSON.stringify(result));

        if(result)
        {
          navigate('/')
        }
    }

    useEffect(() => {
      const auth = localStorage.getItem("user");
      if(auth)
      {
        navigate('/')
      }
    })

  return (
    <div className='register mt-5'>
        <h1>Registration</h1>
        <input className='inputbox' value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='Enter Name' />
        <input className='inputbox' value={email} onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='Enter Email' />
        <input className='inputbox' value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter Password' />
        <button type='button' onClick={collectdata} className='appButton'>Sign UP</button>
    </div>
  )
}

export default SignUp