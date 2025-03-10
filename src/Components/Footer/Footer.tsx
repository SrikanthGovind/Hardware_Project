import {
  Box,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { useStyles } from "./Footer.style";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaThreads } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
export default function Footer() {
  const style = useStyles();
  return (
    <Box className={style.footerCon} >
      <Box className={style.footerContent}>
        <Box className={style.ListItem}>
          <Typography className={style.ListHeader}>Contact Us</Typography>
          <ListItem className={style.ListItemCon}>
            <ListItemText className={style.ListText}>Phone : (91) 987-654-3210</ListItemText>
            <ListItemText className={style.ListText}>Email : quantumhardwares@gmail.com</ListItemText>
            <ListItemText className={style.ListText}>Address : 123 Main St, City, State</ListItemText>
          </ListItem>
        </Box>
        <Box className={style.ListItem}>
          <Typography className={style.ListHeader}>Quick Links</Typography>
          <ListItem className={style.ListItemCon}>
            <ListItemText className={style.ListText}>About Us</ListItemText>
            <ListItemText className={style.ListText}>Products</ListItemText>
            <ListItemText className={style.ListText}>Privacy Policy</ListItemText>
            <ListItemText className={style.ListText}>Terms & Conditions</ListItemText>
            <ListItemText className={style.ListText}>FAQ</ListItemText>
          </ListItem>
        </Box>
        <Box className={style.ListItem}>
          <Typography className={style.ListHeader}>Follow Us On </Typography>
          <ListItem className={style.ListItemCon}>
            <Box className={style.SocialWrapper}>
              <Box className={style.SocialLinks}>
                <IconButton  sx={{color:'#000000',fontSize:'30px'}} >
                  <FaInstagram />
                </IconButton>
                <ListItemText className={style.ListText}>Instagram</ListItemText>
              </Box>
              <Box className={style.SocialLinks}>
                <IconButton  sx={{color:'#000000',fontSize:'30px'}}>
                  <CiFacebook />
                </IconButton>
                <ListItemText className={style.ListText}>Facebook</ListItemText>
              </Box>
            </Box>
            <Box className={style.SocialWrapper}>
              <Box className={style.SocialLinks}>
                <IconButton sx={{color:'#000000',fontSize:'30px'}}>
                  <TbBrandLinkedin />
                </IconButton>
                <ListItemText className={style.ListText}>Linked IN</ListItemText>
              </Box>
              <Box className={style.SocialLinks}>
                <IconButton sx={{color:'#000000',fontSize:'30px'}}>
                  <FaThreads />
                </IconButton>
                <ListItemText className={style.ListText}>Threads</ListItemText>
              </Box>
            </Box>
          </ListItem>
        </Box>
        <Box sx={{display:'flex',alignItems:'center'}}>
             <img src="../../../public/Quantum Hardware.svg" alt="" height={'100px'} />
        </Box>
      </Box>
      <Box className={style.copyRight}>
        <IconButton sx={{color:'#000000'}}>
          <CopyrightIcon />
        </IconButton>
        <Typography>2025 Quantum Hardwares. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
}
