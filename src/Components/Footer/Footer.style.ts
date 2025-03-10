import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
    footerCon:{
      display:'flex',
      gap:'50px',
      background:'#F6F9FC',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center',
           padding:' 40px',
           width:"100%",
    },
    footerContent:{
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
        padding:'0 50px'
    },
    ListItem:{
      display:'flex',
      gap:'20px',
      flexDirection:'column'
    },
    ListItemCon:{
        display:'flex',
        gap:'10px',
        flexDirection:'column',
        alignItems:'flex-start !important',
        justifyContent:'flex-start !important',
        padding:'0 !important'

    },
    ListHeader:{
        fontSize:'23px !important'
    },
    ListText:{
    '& .MuiTypography-root':{
    fontSize:'14px !important',
    fontWeight:'300'

    }

    },
    SocialWrapper:{
     display:'flex',
     gap:'20px'
    },
    SocialLinks:{
      display:'flex',alignItems:'center'
    },
    copyRight:{
         display:'flex',
         alignItems:'center',
         width:"fit-content",

         '& p':{
          fontSize:'13px !important'

         }

    }
})