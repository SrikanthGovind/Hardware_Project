
import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
    header:{
    //    border:'1px solid red',
       backgroundColor:'white !important',
       color:'#000000 !important',
       boxShadow:'none !important',
       height:'64px',
       boxSizing:'border-box',
       padding:'0 40px'
    },
    headerToolbar:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    logo:{
        height:'40px',
    },
    searchCon:{
       width:"40%",
       border:'1px solid #ADB7BA',
       borderRadius:'7px',
       display:'flex',
       alignItems:"center",
       height:'45px',
    },
    textField:{
       width:'90%',
       '& .MuiInputBase-input::placeholder': {
            color: '#717373', 
            fontSize: '16px', 
          },

       '& .MuiOutlinedInput-notchedOutline':{
       border:'0 !important',
       borderRadius:'0',
       }

    },
    listCon:{
        display:"flex",
    },
    listItem:{
        gap:'12px !important',
        display:'flex',
        alignItems:'center',
        color:"#000000 !important",


        '& .MuiListItemIcon-root':{
            minWidth:"auto"
        },
    },
    floatingListCon:{
         marginTop:'80px !important',
         display:'flex',
         background:'#E0F6FF',
         overflow:'scroll',
         alignItems:'center',
         justifyContent:'center',
         gap:"50px",

         '&::-webkit-scrollbar': {
            display: 'none',
          },
    },
    navItem:{
        width:'auto !important',
        display:'flex',
        alignItems:"center",
        justifyContent:'center',

        "& .MuiListItemText-root":{
             flex:'none'
        },

        "& .MuiListItemIcon-root":{
            minWidth:'auto',
        },
      '&:hover': {
      '& .MuiListItemText-primary': {
        color: '#046DB2',
      },
    },
    
    },
    HoverOverlayCon:{
        display:'flex',
        justifyContent:'center',
        position:'absolute',
        width:'100%',
        zIndex:'2000',
        background:'white',
        height:'350px',
    },
    HoverOverlayWrapper:{
        width:'90%',
         display:'flex',
         padding:'40px',
        overflowY:'scroll',
        flexWrap:'wrap',
        boxShadow:'1px 1px 1px rgba(0,0,0,25%),-1px 0px 1px rgba(0,0,0,25%)',
        borderRadius:'4px',
    },
    ListWrapper:{
      width:'fit-content !important',
              padding:'10px'
    },
    ListItem:{
        display:'flex',
        width:'50%',
        gap:"20px !important",
        alignItems:'center !important',
        // justifyContent:'center !important',
        padding:'0 !important',
        cursor:'pointer',
        height:'fit-content !important'
    },
    ListText:{
     width:'45% !important',
    fontSize:'16px !important',
    fontWeight:'250 !important'

    }
})