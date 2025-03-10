import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useStyles } from "./Wishlist.style";
import { useDispatch, useSelector } from "react-redux";
import { Product, RootState } from "../../types";
import { cartActions, productActions } from "../../Redux";
import { MouseEvent } from "react";

export default function Wishlist() {
  const style = useStyles();
  const productItems=useSelector((state:RootState)=>state.product.items)
  const wishlistItems=useSelector((state:RootState)=>state.product.wishlistItems)
  const data=productItems.filter((ele)=>{
    return wishlistItems.some((item)=>item.id===ele.id)
 })

  const dispatch=useDispatch();

    function handleAddToCart(data: Product,e: React.MouseEvent<HTMLButtonElement>){
      e.stopPropagation();
      e.preventDefault();
	  dispatch(cartActions.addItemtoCart(data))
	}

	function handleRemoveItem(id:number| undefined,e: React.MouseEvent<HTMLButtonElement>){
    e.stopPropagation();
    e.preventDefault();
        dispatch(productActions.setRemoveWishlistItem(id))
	}

    function openOverlay(item:Product,e: MouseEvent<HTMLTableRowElement, globalThis.MouseEvent>){
       e.stopPropagation();
       e.preventDefault();
        dispatch(productActions.setOverlayItem(item))
        dispatch(productActions.setOpenOverlay())
    }

  return (
    <Box className={style.wishlistWrapper}>
      <Box className={style.textCon}>
        <Typography sx={{ fontSize: "20px", width: "80%" }}>
          Wishlist Items
        </Typography>
      </Box>
      <TableContainer className={style.tableCon}>
        <Table className={style.table}>
		{data.length === 0 && (
          <Box className={style.emptyWishlist}>
            <img 
			src="https://www.sikkaji.com/assets_web/images/empty-cart.png" alt="" />
            <Typography>Your Wishlist is empty, Add items</Typography>
          </Box>
        )}
		{
			data.length!==0 &&  <TableHead>
            <TableRow>
              <TableCell  className={style.tablehead}>Product Image</TableCell>
              <TableCell  className={style.tablehead}>Product Name</TableCell>
              <TableCell  className={style.tablehead}>Product Price</TableCell>
              <TableCell  className={style.tablehead}>Stock Status</TableCell>
              <TableCell className={style.tablehead} >Product Actions</TableCell>
            </TableRow>
          </TableHead>
		}
         
          <TableBody>

	      	{     
                data.map((ele)=>{
                    return      <TableRow key={ele.id} onClick={(e)=>openOverlay(ele,e)}>
                    <TableCell component="th" scope="row" >
                      <img
                        width={"100px"}
                        height={"100px"}
                        style={{objectFit:'cover',borderRadius:'4px'}}
                        src={ele.image}
                        alt=""
                      />
                    </TableCell>
                    <TableCell  sx={{ color: "grey" }}>
                      {" "}
                      {ele.name}
                    </TableCell>
                    <TableCell  sx={{ color: "grey" }}>
                      ${ele.price}
                    </TableCell>
                    <TableCell  className={style.stock}>
                      {" "}
                     {ele.availability}
                    </TableCell>
                    <TableCell >
                      <Button className={style.wishlistbtn} onClick={(e)=>handleAddToCart(ele,e)}> Add to cart</Button>
                      <Button className={style.deletbtn} onClick={(e)=>handleRemoveItem(ele.id,e)}>
                       Remove Item
                      </Button>
                    </TableCell>
                  </TableRow>
                })
            }
       
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
