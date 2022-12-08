import React, { useEffect, useState } from 'react'
import Button from './Button'
import DetailsPopup from './DetailsPopup';
import Products from './Products';
import "./App.css";


function App() {
     
  const [products,setProduct]=React.useState([]);
  useEffect(()=>{
    const getProducts= async() =>{
      const data = await fetchProducts();
      setProduct(data);
    };
    getProducts();
  },[])

  const fetchProducts = async()=>{
    const res = await fetch("http://localhost:5050/products");
    const data = await res.json();
      return data;
      
  };
  const[btnPopup, setBtnPopup] = useState(false);

  return (
    <div className='App'>
      <div className='header'>
        <nav>
          <ul>
            <li>
              <a href='/'>HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
      <Products  products={products} setProduct={setProduct} editClick={()=>setBtnPopup(true)} ></Products> 
      </div> 
    </div>
    
  
  );
}

export default App