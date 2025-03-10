import { Box, Button, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useStyles } from "./Combo.style";
import AddIcon from '@mui/icons-material/Add';

export default function Combo() {
    const style=useStyles();
    const reviews = new Array(5).fill({});
  return (
    <Box className={style.comboCon}>
      <Typography sx={{ fontSize: "23px" }}>Buy Items Together</Typography>
      <Box className={style.comboItemWrapper}>
        {
          reviews.map((ele)=>{
            return   <Card key={ele} className={style.comboItem}>
            <Box className={style.comboImgCon}>
              <Box className={style.comboImg}>
                <img
                  width={"100%"}
                  height={"100%"}
                  src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </Box>
              <IconButton>
                  <AddIcon/>
              </IconButton>
              <Box className={style.comboImg}>
                <img
                  width={"100%"}
                  height={"100%"}
                  src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </Box>
            </Box>
            <CardContent className={style.comboItemContent}>
              <Typography sx={{ fontSize: "16px",textAlign:'center' }}>
                DELL Inspiron 3535 MSO With Wirelss mouse
              </Typography>
              <Typography>
                <span style={{ color: "#B60707",fontSize: "14px", }}> $98767.59</span>
                <span style={{ marginLeft: "14px",fontSize: "14px", }}>$56767.59</span>
              </Typography>
  
              <Box className={style.checkNow}>
                <Button >Check Now</Button>
              </Box>
            </CardContent>
          </Card>
          })
        }
      
      </Box>
    </Box>
  );
}
