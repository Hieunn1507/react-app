import React from 'react'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.css';
import DetailsPopup from './DetailsPopup';

function Products({products,setProducts,editClick,delClick}) {

const delPro = async function(id){
    await fetch(`http://localhost:5050/products/${id}`,{
    method:"DELETE",
});
    setProducts(products.filter((product)=> product.id !== id)); 
};

const EditPro= async(id) =>{};
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
               
                onEdit={editClick}
                onDel={delClick}></Product>
            ))}
            
            </tbody>
        </table>
        
    </div>
  )
}

export default Products