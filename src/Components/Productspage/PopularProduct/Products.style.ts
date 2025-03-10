
import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
 
    productsCon:{
        padding:'0 40px',
        display:'flex',
        flexDirection:'column',
        gap:'50px',
    },
    productItemCon:{
      display:'flex',
      gap:'40px',
      overflowX:'scroll',
    // flexWrap:'wrap',
      marginLeft:'30px',

      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    productItem:{
        flex: '0 0 calc(100% / 6 - 40px)', 
        boxSizing: 'border-box',
        position:'relative',
        padding:'20px',
        border:'1px solid #D4CCCC',
        boxShadow:'none !important',
    },
    productItemContent:{
       padding:'16px 0 !important ',
       display:'flex',
       flexDirection:'column',
       gap:'10px',

    },
    SaveIcon:{
        background:"white !important",
        boxShadow:'0px 4px 4px rgb(0, 0, 0, .25)',
        right:'6px',
        top:'6px',
    },
    QuickView:{
        '& button':{
            width:"100%",
            background:"#3CA5FB",
            color:"white",
            '&:hover':{
                background:"#3CA5FB",
                color:"white",
            }
        },
   
    }

})