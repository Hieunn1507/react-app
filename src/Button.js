import React from 'react'
import PropTypes from "prop-types";

class Button extends React.Component {
  constructor(props) {
    super(props); 
  }
 render (){
  return(
    <div>
      <button style={this.props.btnClor} onClick={clickbtn}>{this.props.btnTxt}</button>
    </div>
  )
 }
}

const clickbtn = () => {
  alert('Ngô NGọc hiếu')
}

Button.defaultProps = {
  btnTxt: '',
  btnClor: {
   }
  };

  Button.propTypes = {
    btnText: PropTypes.string,
    btnColor: PropTypes.string,
  };

export default Button