import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
    comboCon:{
        padding:'40px',
        display:'flex',
        flexDirection:'column',
        gap:'50px',
    },
    comboItemWrapper:{
        display:'flex',
        gap:'40px',
        marginLeft:'30px',
        overflowX:'scroll',

        '&::-webkit-scrollbar': {
            display: 'none',
          },

    },
    comboItem:{
       flex:'0 0 calc(100% / 3 - 40px)',
       padding:"10px",
       border:'1px solid #D4CCCC',
       boxShadow:'none !important',
    },
    comboImgCon:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      gap:'10px'

    },
    comboImg:{
       width:'200px',
       height:'130px',

       '& img':{
        borderRadius:'4px'
       }
    },
    comboItemContent:{
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
       flexDirection:'column',
       gap:'10px'

    },
    checkNow:{
       width:'100%',
        '& button':{
           width:'100%',
           fontSize:'12px !important',
              border: '1px solid #3CA5FB'
        }
    }
})