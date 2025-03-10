import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
    SearchWrapper:{
     padding:'30px 50px',
     
    },
    filterCon:{
          width:'20%',
        border:'1px solid #AEAEAE',
        borderRadius:'5px',
        height:'fit-content'
    },
    SearchCon:{
        marginTop:'30px',
        display:'flex',

    },
    filters:{
    padding:'10px',
    borderBottom:'1px solid #AEAEAE',
    },
    filterTitle:{
        color:'#434343',
        fontWeight:'bold'
    },
    formGroup:{
     padding:'5px 30px'
    },
    filter:{
        width:'fit-content !important',
        '& .MuiFormControlLabel-label':{
            fontSize:'17px !important',
            fontWeight:'300'

        }
    },
    productItemCon:{
        width:'80%',
        display:'flex',
        gap:'40px',
        overflowX:'scroll',
        marginLeft:'30px',
        flexWrap:'wrap',
        height:'fit-content',
  
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
      productItem:{
          width: 'calc(100% / 4 - 40px)', 
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
          top:'6px'
         
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