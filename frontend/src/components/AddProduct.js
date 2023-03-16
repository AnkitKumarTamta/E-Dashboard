import React,{useState} from 'react'

const AddProduct = () => {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")
    const [err,setErr] = useState(false);

    const addProduct = async()=>{

        if(!name || !price || !category || !company) 
        {
            setErr(true);
            return false;
        }

        console.log(name,price,category,company)
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            "method":"post",
            "body": JSON.stringify({name,price,category,company,userId}),
            headers:{"Content-Type":"application/json"}
        })

        result = await result.json();
        console.log(result)
        setName("")
        setPrice("")
        setCategory("")
        setCompany("")
        alert("Product added sucessfully...")
    }
  return (
    <div className='product mt-5'>
        <h1>Add Product</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='inputbox' placeholder="Enter Product Name" />
        {err && !name && <span className='fielderr'>Enter valid name!</span>}
        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} className='inputbox' placeholder="Enter Product Price" />
        {err && !price && <span className='fielderr'>Enter valid price!</span>}
        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} className='inputbox' placeholder="Enter Product Category" />
        {err && !category && <span className='fielderr'>Enter valid category!</span>}
        <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} className='inputbox' placeholder="Enter Product Company" />
        {err && !company && <span className='fielderr'>Enter valid company!</span>}
        <button className='appButton' onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct