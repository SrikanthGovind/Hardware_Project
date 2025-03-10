import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
    CartWrapper:{
     padding:'30px',
    },
    cartCon:{
      width:'60%',
      padding:'20px'
    },
    cartItem:{
        display:'flex',
        boxShadow:'none !important',
        borderBottom:'1px solid #D4CCCC',
        borderRadius:'0 !important',
        padding:'20px',
        gap:'20px'
    },
    cartContent:{
        padding:'0 20px !important',
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        width:'100%'

    },
    QuantityCon:{
        display:'flex',
        alignItems:'center',
       justifyContent:'space-between'
    },
    PricingCon:{
         border:'1px solid #D4CCCC',
         height:"fit-content",
         width:"23%",
         borderRadius:'5px',
         position:'absolute',
         right:'150px'
    },
    cartTotal:{
      display:'flex',
      flexDirection:'column',
      gap:'15px',
      padding:'20px 20px 30px 20px'
    },
    checkout:{
  background:'#3CA5FB !important',
  color:'white !important',
  marginTop:'10px !important'
    },
    emptyCart:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'600px',

      '& img':{
        width:"400px"
      },
      '& p':{
        fontSize:'25px',
        color:"grey"
      }
    },
    message: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      bottom: "100px",
      width: "100%",
      animation: '$slideUp 0.5s ease-in-out',
    },
    '@keyframes slideUp': {
      '0%': {
        transform: 'translateY(100%)',
        opacity: '0',
      },
      '100%': {
        transform: 'translateY(0)',
        opacity: '1',
      },
    },

})