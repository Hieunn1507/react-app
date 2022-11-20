import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

function DetailsPopup(props) {
  return (props.trigger)?(
    <div className="popup">
        <div className="popup-inner">
        <form >
<div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" />
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

  <button type="submit" class="btn btn-success" onClick={() => props.setTrigger}>Edit</button>{props.children}
  <button type="submit" class="btn btn-danger">cancel</button>
</form>      
        </div>
    </div>
 
         
  ):"";
}

export default DetailsPopup