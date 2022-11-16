import React from 'react'
import Button from './Button'

function Product({product,onClicks,onClickss}) {
  return (
    
    
          <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.name}</td>
            <td>
              <Button onClicks={onClicks} onClickss={onClickss}></Button>
              
            </td>
          </tr>
      
        
        
    
  )
}

export default Product