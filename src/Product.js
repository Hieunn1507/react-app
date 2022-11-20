import React from 'react'
import Button from './Button'

function Product({product,onDel,onEdit}) {
  
  return (
    
    
          <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.brand}</td>
            <td>
              <Button color="Green" text="edit" onClickss={onEdit} ></Button>
              <Button color="red" text="delete" onClickss={onDel} ></Button>
              
            </td>
          </tr>
      
        
        
    
  )
}

export default Product