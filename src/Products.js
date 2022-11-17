import React from 'react'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.css';

function Products({products,rowclicks,rowclickss}) {



  return (
    <div >   
        
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
            {products.map((elements) => (
                <Product 
                key={elements.id}
                product= {elements}
                onClick={rowclicks}
                onClicks={rowclickss}></Product>
            ))}
            
            </tbody>
        </table>
        
    </div>
  )
}

export default Products