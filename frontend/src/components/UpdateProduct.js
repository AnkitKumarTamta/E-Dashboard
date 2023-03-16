import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'


const UpdateProduct = () => {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")

    const param = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      getProductDetails();
    }, [])

    const getProductDetails =async ()=>{
        let result =await fetch(`http://localhost:5000/product/${param.id}`);
        result = await result.json();
        console.log(result)
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }
    

    const updateproduct = async()=>{

        console.log(name,price,category,company)
        let result = await fetch(`http://localhost:5000/product/${param.id}`,{
            method: "Put",
            body: JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        console.log(result);
        navigate('/')

    }
  return (
    <div className='product mt-5'>
        <h1 className='mt-3'>Update Product</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='inputbox' placeholder="Enter Product Name" />
        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} className='inputbox' placeholder="Enter Product Price" />
        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} className='inputbox' placeholder="Enter Product Category" />
        <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} className='inputbox' placeholder="Enter Product Company" />
        <button className='appButton' onClick={updateproduct}>Update Product</button>
    </div>
  )
}

export default UpdateProduct