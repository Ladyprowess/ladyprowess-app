import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


function SupportButton({type,border, txtColor,pd, br,fs, w, bg, txt, fw,}) {

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
    
   //  '&:hover': {
   //     background: "#fff",
   //  },
  }));

    return (
      <a style={{textDecoration:'none'}} href="https://cwallet.com/t/7MVNI1SG" className='SAM' target="_blank" rel="noopener noreferrer">
         <ColorButton type={type} disableElevation variant="contained"> {txt}</ColorButton>
      </a> 
   )
}

export default SupportButton