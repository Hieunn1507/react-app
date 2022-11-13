import React from 'react'
import Button from './Button'


function App() {

  const styles ={
    'color':'blue'
  }
  return (
    <div><Button btnClor={styles} btnTxt="Click here"></Button></div>
  )
}

export default App