import React from 'react'
import { Button } from '@mui/material'

function ButtonCustom({ onClick, text, className, color}) {
  
  const handleClick = () => {
    if(onClick){
      onClick()
    }
  }

  
  return (
    <Button
    onClick={handleClick}    
    color={color}
    size="large"
    variant="contained"
    className={className}>
      {text}
    </Button>
  )
}

export default ButtonCustom