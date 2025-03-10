import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { useStyles } from "./Products.style";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../../types";
import { productActions } from "../../../Redux";
import { Product } from "../../../types";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [value, setValue] = React.useState<number | null>(3);
  const data=useSelector((state:RootState)=>state.product.items)

  const dispatch=useDispatch();
  const style = useStyles();
  const navigate=useNavigate();

  function openOverlay(item:Product,e: React.MouseEvent<HTMLButtonElement>){
     e.stopPropagation();
     e.preventDefault();
      dispatch(productActions.setOverlayItem(item))
      dispatch(productActions.setOpenOverlay())
  }

  function handleProduct(id:number | undefined){
      dispatch(productActions.setSelectedProduct(id))
      navigate('/productdetails')
  }

  function handleWishlist(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,item:Product){
      e.stopPropagation()
      dispatch(productActions.setWishlistItems(item))
  }

  return (
    <Box className={style.productsCon}>
      <Typography sx={{fontSize:'23px'}}>Popular Products</Typography>
      <Box className={style.productItemCon}>
        {
          data.map((item)=>{
          return  <Card onClick={()=>handleProduct(item.id)} key={item.id} className={style.productItem}>
            <IconButton className={style.SaveIcon} sx={{position:"absolute",color:item.isAdded ? 'red' : 'black'}} onClick={(e)=>handleWishlist(e,item)}>
                 <FavoriteBorderIcon/>
            </IconButton>

            <CardMedia
              component="img"
              width="191"
              height="157"
              image={item.image}
              alt="dell image"
            />
            <CardContent className={style.productItemContent}>
              <Typography sx={{textOverflow:'ellipsis'}}>{item?.name?.slice(0,18)+'...'}</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(_, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography>
                <span style={{color:"#B60707"}}> $8767.59</span>
                <span style={{marginLeft:"14px"}}>${item.price}</span>
              </Typography>
            </CardContent>

          <Box className={style.QuickView}>
            <Button onClick={(e)=>openOverlay(item,e)}>Quick View</Button>
          </Box>
        </Card>
          })
        }
      </Box>
    </Box>
  );

}
