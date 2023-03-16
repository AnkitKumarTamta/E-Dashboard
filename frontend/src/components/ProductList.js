import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getData();
    },[])

    const getData = async ()=>{
     let result = await fetch("http://localhost:5000/products")
     result = await result.json();
     setProducts(result.reverse());
     
    }
    console.log(products)

    const deleteProduct = async(id)=>{
        let result =await fetch(`http://localhost:5000/product/${id}`,
        {
            method:"Delete"
        });
        result = await result.json();
        if(result)
        {
            getData();
        }
         
    }

    const searchHandle = async (e)=>{
        const key = e.target.value;
        if(key)
        {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if(result)
            {
                setProducts(result);
            }
        }else
        {
            getData()
        }
       
    }
   

  return (
    <div><h1 className='display-2' style={{"textAlign":"center","marginTop":"40px"}}>Product List</h1>
    <input type='text' className='searchinput mt-4' onChange={searchHandle}  placeholder='Search product' />
    <table className='tabled'>
        <thead>
            <th>S no</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
        </thead>
        <tbody>
            {
                products.map((item,index)=>
                    <tr key={item._id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td className='twobutton'><button className='btn btn-danger '  onClick={()=>deleteProduct(item._id)}>Delete</button>
                        <button className='btn btn-success '><Link className='linkw'  to={"/update/"+item._id}>Update</Link></button></td>
                    </tr>
                )
            }
        </tbody>
    </table>
    </div>
  )
}

export default ProductList