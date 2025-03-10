import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
    productDetailsCon:{
      padding:'80px 50px',
      display:'flex',
      flexDirection:'column',
      gap:'60px',
    },
    productOverview:{

    },
    productDesc:{
        display:'flex',
        justifyContent:'center',
        gap:'50px'
      
    },
    productTable:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        gap:'30px',
    },
    productReviews:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        gap:'30px',
    },
    productDetail:{
        width:'30%',
        display:'flex',
        flexDirection:'column',
        gap:"10px"
    },
    productImageWrapper:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'10px',
    },
    productImageCon:{
           display:'flex',
           alignItems:'center',
           gap:'30px'
    },
    pagination:{

    },
    productImage:{
      width:'600px',
      height:'450px',

      '& img':{
     borderRadius:'5px'
      }
    },
    chevronLeft:{
       width:"50px",
    },
    chevronRight:{
        width:"50px",
          '& img':{
            transform:'rotate(180deg)'
          }
    },
    OverlayDesc:{
        display:'flex',
   flexDirection:'column',
   gap:'20px'
    },

    productBtn:{
        width:'100%',
        marginTop:'20px',
        display:'flex',
        gap:'30px',

        '& button':{
           width:'100%',
              border: '1px solid #3CA5FB',
              '&:nth-child(1)':{

              },
              '&:nth-child(2)':{
                   background:' #3CA5FB',
                   color:'white'
              }
        }
    },
    DescList:{
        display:'flex',
        flexDirection:'column',
        gap:'15px'
    },
    BtnCon:{
        display:'flex',
        gap:'20px',
        marginTop:'15px'

    },
    colorBtn:{
        border:'1px solid #000000 !important',
        color:'black !important',
        fontWeight:'300 !important'
    },
    colorBtnSelected:{
       background:'#E0F6FF!important',
          color:'black !important',
             fontWeight:'300 !important',
             border:'1px solid #3CA5FB!important', 
    },
    OverviewTextCon:{
        display:'flex',
        flexDirection:'column',
        padding:'10px 100px',

        '& li':{
            fontSize:'25px',
            fontWeight:'300',
        }
    },
    productTableItemsCon:{
        display:'flex',   
        flexDirection:'column',
        gap:'10px'
    },
    productSpecificationItem:{
       display:'flex',   
       background:'rgba(224,246,255,50%)' ,
       padding:'10px 30px' 
    },
    productSpecificationItemEven:{
        display:'flex',   
        padding:'10px 30px' 
     },
    productType:{
        width:'30%',
        fontSize:'16px !important',
        textTransform:'capitalize'
    },
    productValue:{
    width:'70%',
    fontSize:'16px !important',
    fontWeight:'300 !important'
    },
    reviewsCon:{
        display:'flex',
        gap:'30px',
        flexDirection:'column',
        padding:' 10px 50px'
   },
    reviews:{
         display:'flex',
         width:'35%',
         gap:'25px',
         
    }
})