import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Button from './Button'



function DetailsPopup({props,trigger,setTrigger,handleSave,idSelect}) {
  const [detail,setDetail] = useState({
    id: props.id,
    title:props.title,
    description:props.description,
    price:props.price,
    discountPercentage:props.discountPercentage,
    rating:props.rating,
    stock:props.stock,
    brand:props.brand,
    category:props.category,
    thumbnail:props.thumbnail,
    image:props.image
});


const handleChange = (e) => {
    setDetail((detail) => ({...detail, [e.target.id]:e.target.value}))
}


  // var index = products.map(function(e){
  //   return e.id
  // }).indexOf(id);

  return (trigger)?(
    <div className="popup">
        <div className="popup-inner">
        { Object.keys(props).map((key, i) => (
          <form >
            <div class="mb-3 row" key={i}>
            <label class="col-sm-2 col-form-label">{key}</label>
            <div class="col-sm-10">
            <input id={key} type="text" class="form-control" onChange={handleChange} defaultValue={props[key]}></input>
            
            </div>
            </div>
          
            </form>
            
            
        ))}
        <Button text="save" onClickss={() => handleSave(idSelect, detail, setTrigger)}  color="green"/>
         <Button text="Cancel" onClickss={() => setTrigger(false)} color="red"/> 
        {/* <form >
<div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">{props.tittle}</label>
    <div class="col-sm-10">
    <input type="text" class="form-control"defaultValue={props.tittle} ></input>
     </div>
</div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Price</label>
    <div class="col-sm-10">
    <input type="text" class="form-control"/>
     </div>
</div>
<div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Stock</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" />
     </div>
</div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Brand</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" />
     </div>
</div>

  <button type="submit" class="btn btn-success" onClick={() => setTrigger}>Edit</button>
  <button type="submit" class="btn btn-danger">cancel</button>
</form>       */}
        </div>
    </div>
 
         
  ):"";
}

export default DetailsPopup