import { Typography, Box } from "@mui/material";
import { useStyles } from "./Deals.style";

export default function Deals() {
    const style=useStyles();
  return (
    <Box className={style.Deals}>
        <Box className={style.DealsWrapper}>
      <Box className={style.DealsText}>
        <Typography>Deals of the day</Typography>
        <Typography>30% Off On Mobiles and Accessories</Typography>
      </Box>
      <Box className={style.DealsImg}>
        <img src="../../../../public/Frame 269.svg" alt="" width={'100%'} height={'100%'} />
      </Box>
                  
      </Box>
    </Box>
  );
}
