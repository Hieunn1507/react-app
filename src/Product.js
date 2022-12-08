import React, { useState } from 'react'
import Button from './Button'
import DetailsPopup from './DetailsPopup'
import DetailsProduct from './DetailsProduct';


function Product({product,onDel,handleSave,handleView}) {
  const[btnPopup, setBtnPopup] = useState(false);
  const[btnDetails, setBtnDetails] = useState(false);
  return (
    
    
          <tr>
           
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.brand}</td>
            <td>
              <Button color="Green" text="edit" onClickss={()=>setBtnPopup(true)} ></Button>
              <Button color="red" text="delete" onClickss={()=>{onDel(product.id)}} ></Button>
              <Button color="blue" text="Details" onClickss={()=>setBtnDetails(true)} ></Button>
            </td>
            
            <DetailsPopup trigger={btnPopup} idSelect={product.id}   handleSave={handleSave} setTrigger={setBtnPopup} props={product}/>
            <DetailsProduct trigger={btnDetails} idSelect={product.id}   handleView={handleView} setTrigger={setBtnDetails} props={product}/>
            
        
          </tr>
      
        
        
    
  )
}

export default Product