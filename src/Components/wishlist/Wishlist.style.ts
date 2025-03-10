
import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
    wishlistWrapper:{
       padding:"70px",
       display:'flex',
  flexDirection:'column',
  gap:'30px'
    },
      tableCon:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
      table:{
        width: "80% !important" ,
        boxSizing:'border-box'
      },
      textCon:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
      tablehead:{
       color:"grey !important",
       fontWeight:'bold !important',
      },
      wishlistbtn:{
          border: '1px solid #3CA5FB !important',
          color:'#3CA5FB !important',
          fontSize:'12px !important',
      },
      deletbtn:{
        width:'fit-content',
        color:"crimson !important",
        fontSize:'12px !important',
        border:"1px solid crimson !important",
        marginLeft:"10px !important"
      },
      stock:{
        color:'green !important'
      },
      emptyWishlist:{
        display:'flex',
        flexDirection:'column',
        gap:'30px',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'600px',
  
        '& img':{
          width:"400px",
          
        },
        '& p':{
          fontSize:'25px',
          color:"grey"
        }
      }

})