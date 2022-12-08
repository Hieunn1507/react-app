import React, { useState } from 'react'
import Button from './Button';

function DetailsProduct({props,trigger,setTrigger,idSelect}) {
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
    const handleView = (e) => {
        setDetail((detail) => ({...detail, [e.target.id]:e.target.value}))
    }
  return (trigger)?(
    <div className="popup">
        <div className="popup-inner">
        { Object.keys(props).map((key, i) => (
          <form >
            <div class="mb-3 row" key={i}>
            <label class="col-sm-2 col-form-label">{key}</label>
            <div class="col-sm-10">
            <input id={key} type="text" class="form-control"  defaultValue={props[key]}></input>
            
            </div>
            </div>
          
            </form>
            
            
        ))}
        {/* <Button text="Cancel" onClickss={() => handleView(idSelect, detail, setTrigger)}  color="red"/>  */}
        <Button text="Cancel" onClickss={() => setTrigger(false)} color="red"/> 

        </div>
    </div>
  ):""
}

export default DetailsProduct