import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
      Deals:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'50px'
      },
      DealsWrapper:{
        background:'#F9E2FC',
        width:'60%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'80px',
        height:'fit-content',
        borderRadius:'20px'
      },
      DealsText:{
         '& p':{
             
            '&:nth-child(1)':{
                color:'#000000',
                fontSize:'30px'
            },
            '&:nth-child(2)':{
                color:'#858588',
                fontSize:'25px'
            }

         }
      },
      DealsImg:{
         height:'200px'
      }

})