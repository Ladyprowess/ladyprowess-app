import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


function SupportButton({type,border, txtColor,pd, br,fs, w, bg, txt, fw, onClick}) {

   const ColorButton = styled(Button)(() => ({
    color: txtColor,
    backgroundColor: bg, 
    borderRadius:br,
    width: w,
    padding:pd,
    fontWeight:fw,
    textTransform:"none",
    fontSize:fs,
    border:border,
    
    // '&:hover': {
    //    background: hoverBG,
    // },
  }));

    return (
      <a style={{textDecoration:'none'}} href="mailto:" className='SAM' target="_blank" rel="noopener noreferrer">
         <ColorButton type={type} disableElevation variant="contained" onClick={onClick}> {txt}</ColorButton>
      </a> 
   )
}

export default SupportButton