import { Box, Button, IconButton, Rating, Typography } from "@mui/material";
import { useStyles } from "./Overlay.style";
import { HiOutlineXMark } from "react-icons/hi2";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from "react-redux";
import { cartActions, productActions } from "../../Redux";
import { Product, RootState } from "../../types";


export default function Overlay() {
  const [value, setValue] = React.useState<number | null>(3);
  const dispatch=useDispatch();
  const data=useSelector((state:RootState)=>state.product.overlayItem)
  const style = useStyles();
  console.log(data)

  function closeOverlay(){
      dispatch(productActions.setOpenOverlay())
  }

  function handleAddToCart(data:Product){
    dispatch(cartActions.addItemtoCart(data))
  }

    function handleWishlist(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,item:Product){
        e.stopPropagation()
        dispatch(productActions.setWishlistItems(item))
    }

  return (
    <Box className={style.overlayCon} onClick={closeOverlay}>
      <Box className={style.overlayWrapper} onClick={closeOverlay}>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
          <IconButton  onClick={closeOverlay}>
            <HiOutlineXMark />
          </IconButton>
        </Box>

      <Box className={style.OverlayContent}>
        <Box className={style.OverlayImg}>
          <img src={data.image} alt="" />
            <IconButton className={style.SaveIcon} sx={{position:"absolute",color:data.isAdded ? 'red' : 'black'}} onClick={(e)=>handleWishlist(e,data)}>
                 <FavoriteBorderIcon/>
            </IconButton>
        </Box>
        <Box className={style.OverlayDesc}>
          <Typography sx={{fontSize:'30px'}}>{data.name} </Typography>
          <Typography sx={{fontSize:'20px',fontWeight:'300'}}>{data.description}</Typography>
          <Box className={style.DescList}>
          <Typography sx={{ display: "flex" }}>
            <span style={{fontWeight:'500'}}> Items Dimensions LxWxH : </span>
            <span style={{fontWeight:'250'}}> {data.dimensions?.width} x {data.dimensions?.height} x {data.dimensions?.length}</span>
          </Typography>
          <Typography sx={{ display: "flex" }}>
            <span style={{fontWeight:'500'}}> Item Weight : </span>
            <span style={{fontWeight:'250'}}> 850g</span>
          </Typography>
          <Typography>
              <span style={{ color: "#B60707" }}> $98767.59</span>
              <span style={{ marginLeft: "14px" }}>${data.price}</span>
            </Typography>

            <Typography sx={{ display: "flex" }}>
            <span style={{fontSize:'12px',fontWeight:'300',color:'rgb(216, 64, 64,70%)',padding:'2px 20px',borderRadius:'30px',background:'rgb(216, 64, 64,15%)'}}> Only 5 Items left in stock</span>
          </Typography>
                        
          </Box>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
          />
          <Box className={style.OverlayBtn}>
            <Button  onClick={()=>handleAddToCart(data)}>Add to Cart</Button>
          </Box>
        </Box>
      </Box>
     </Box>
    </Box>
  );
}
