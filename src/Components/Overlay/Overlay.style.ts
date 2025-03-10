import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
    overlayCon:{
       position:'fixed',
            top:'0',
            background:'rgba(0,0,0,60%)',
            width:'100%',
            height:"100vh",
            zIndex:'2000',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            transition:'all 0.5s ease-in-out'

    },
    overlayWrapper:{
      background:'white',
      width:'50%',
      borderRadius:'4px',
    },
    OverlayImg:{
        position:'relative',
        width:'40%',
        height:'450px',
    

        '& img':{
            width:'100%',
            height:'100%',
            objectFit:'cover',
      borderRadius:'4px',

        }
    },
    OverlayContent:{
        display:'flex',
      padding:' 30px',
      gap:'20px'
    },
    OverlayDesc:{
        width:'60%',
        display:'flex',
   flexDirection:'column',
   gap:'20px'
    },
    SaveIcon:{
        background:"white !important",
        boxShadow:'0px 4px 4px rgb(0, 0, 0, .25)',
        right:'10px',
        top:'10px'
    },
    OverlayBtn:{
        width:'100%',
        marginTop:'20px',
        '& button':{
           width:'100%',
              border: '1px solid #3CA5FB'
        }
    },
    DescList:{
        display:'flex',
        flexDirection:'column',
        gap:'10px'
    }
})