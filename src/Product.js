import React, { useState } from 'react'
import Button from './Button'
import DetailsPopup from './DetailsPopup'

function Product({product,onDel,onEdit}) {
  const[btnPopup, setBtnPopup] = useState(false);
  return (
    
    
          <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.brand}</td>
            <td>
              <Button color="Green" text="edit" onClickss={()=>setBtnPopup(true)} ></Button>
              <Button color="red" text="delete" onClickss={onDel} ></Button>
              
            </td>
            <DetailsPopup trigger={btnPopup} setTrigger={setBtnPopup} props={product}>
        
        </DetailsPopup>
          </tr>
      
        
        
    
  )
}

export default Product