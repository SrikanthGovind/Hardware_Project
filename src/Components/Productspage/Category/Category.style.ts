
import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
     categoryCon:{
         padding:'0 40px',
         display:'flex',
         flexDirection:'column',
         gap:'50px'
     },
     categoryItemWrapper:{
        display:'flex',
        gap:'40px',
        marginLeft:'30px',
        overflowX:'scroll'
     },
     categoryItem:{
        flex:'0 0 calc(100% / 6 - 40px)',
        boxSizing: 'border-box',
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
     flexDirection:'column',

     boxShadow:'none !important'
     },
     categoryItemContent:{
        textAlign:'center',
     },
     categoryImg:{
        width:'150px',
        height:'150px',

        '& img':{
           borderRadius:'100%',
        }
     }
})