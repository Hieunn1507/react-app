import React, { useState } from 'react'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.css';
import DetailsPopup from './DetailsPopup';
import Button from './Button';


function Products({products,setProduct,product}) {
  const [search, setSearch] = useState('')
  const [searchValue, setSearchVlaue] = useState("")
    const[btnPopup, setBtnPopup] = useState(false);
    const [detail,setDetail] = useState({
    id: "",
    title:"",
    description:"",
    price:"",
    discountPercentage:"",
    rating:"",
    stock:"",
    brand:"",
    category:"",
    thumbnail:"",
    image:""
});
const delPro = async function(id){
    await fetch(`http://localhost:5050/products/${id}`,{
    method:"DELETE",
});
    setProduct(products.filter((product)=> product.id !== id)); 
};

const handleSave = async (idSelect, detail, setTrigger) => {
    await fetch(`http://localhost:5050/products/${idSelect}`,{
      method:'PUT',
      body: JSON.stringify(detail),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    });
    setTrigger(false)
    const fetchData = async () => {
     let json = await fetch('http://localhost:5050/products');
      json = await json.json();
      setProduct(json);
    }
    fetchData()
    
  };
  const handleAdd = async (idSelect,detail,setTrigger) => {
    await fetch(`http://localhost:5050/products`,{
      method:'POST',
      body: JSON.stringify(detail),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    });
    setTrigger(false)
    const fetchData = async () => {
     let json = await fetch('http://localhost:5050/products');
      json = await json.json();
      setProduct(json);
    }
    fetchData()
    
  };
  const handleView = async (idSelect,detail,setTrigger) => {
    await fetch(`http://localhost:5050/products/${idSelect}`,{
      method:'GET',
      body: JSON.stringify(detail),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    });
    setTrigger(false)
    const fetchData = async () => {
     let json = await fetch('http://localhost:5050/products');
      json = await json.json();
      setProduct(json);
    }
    fetchData()
    
  };

  
  const handleSearch = () => {
    setSearchVlaue(search);
  }
 
  return (
    <div >   
        <input onChange={(e)=>setSearch(e.target.value)}></input>
        <Button onClickss={handleSearch} text='Search' color="blue"/>
        
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            { products.filter(productFilter => productFilter.title.substr(0,searchValue.length) == searchValue).map((elements) => (
                <Product 
                key={elements.id}
                product= {elements}
                handleSave={handleSave}
                onDel={delPro}
                handleView={handleView}></Product>
            ))}
            
            </tbody>
        </table>
        <Button onClickss={()=> setBtnPopup(true)} color="blue" text="ADD" title="ADD"/>
        <DetailsPopup props={detail} trigger={btnPopup}   handleSave={handleAdd} setTrigger={setBtnPopup} />
       
    </div>
  )
}

export default Products