
import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
   carouselWrapper:{
     padding:'30px 150px',

   },
    carouselCon:{
        display:'flex',
        gap:'100px',
        background:'#F6F9FC',
        alignItems:'center',
        justifyContent:'center',
             borderRadius:'20px',
             padding:'30px',
             position:'relative',
             overflow:'scroll'
    },
    carouselItemWrapper:{
        width:'900px',
        overflowY:'hidden',
       display:'flex',


    '&::-webkit-scrollbar': {
        display: 'none',
      },

    },
    carouselWrap:{
        display:'flex',
        width:'100%',

    },
    carouselItem:{
        flex:'none',
        display:'flex',
        height:'fit-content',
        gap:"22px",
        width:'100%',
       flexGrow: 1,
       justifyContent:'center',

    },
    chevronLeft:{
         width:'60px'
    },
    chevronRight:{
        transform:'rotate(180deg)',
        width:'60px'
    },
    carouselImg:{
        width:'400px',
        height:'300px',

       '& img':{
        borderRadius:"15px",
        }
    },
    carouselDesc:{
       display:'flex',
       flexDirection:'column',
       gap:'8px'
    },
    carouselBtn:{
        display:'flex',
        gap:"13px",
        padding:'30px 0',
        alignItems:'center',

        '& button':{
            '&:nth-child(1)': {
                width: '180px',
                backgroundColor: '#3CA5FB',
                color: 'white'
            },
            '&:nth-child(2)': {
                width: '180px',
                border:'1px solid #3CA5FB'
            }
        }
    },
})