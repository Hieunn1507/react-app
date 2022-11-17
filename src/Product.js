import React from 'react'
import Button from './Button'

function Product({product,onClicks,onClick}) {
  return (
    
    
          <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.brand}</td>
            <td>
              <Button color="Green" text="edit" onClickss={onClick} ></Button>
              <Button color="red" text="delete" onClickss={onClicks} ></Button>
            </td>
          </tr>
      
        
        
    
  )
}

export default Product