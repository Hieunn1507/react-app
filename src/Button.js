import React from 'react'
import PropTypes from "prop-types";

class Button extends React.Component {
  constructor(props) {
    super(props); 
  }
 render (){
  return(
    
      <button   type="button" class="btn btn-success"  style={{backgroundColor : this.props.color}} onClick={this.props.onClickss}>{this.props.text}</button>
     
    
  );
 };
}



Button.defaultProps = {
 
  text:'',

  onClicks:'',
  btnTxt: '',
  deletebtn:'delete',
  Editbtn: 'edit',
  btnClor: {
   }
  };

  Button.propTypes = {
    btnText: PropTypes.string,
    btnColor: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    Editbtn: PropTypes.string,
    deletebtn: PropTypes.string,
    onClicks: PropTypes.func,
    onClickss: PropTypes.func,
  };

export default Button