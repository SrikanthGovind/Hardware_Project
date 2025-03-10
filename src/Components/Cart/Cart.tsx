import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useStyles } from "./Cart.style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SlPlus } from "react-icons/sl";
import { SlMinus } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { Product, RootState } from "../../types";
import { cartActions, productActions } from "../../Redux";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { MouseEvent, useState } from "react";
export default function Cart() {
  const style = useStyles();
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);
  const productItems = useSelector((state: RootState) => state.product.items);
  const cartitems = useSelector((state: RootState) => state.cart.items);
  const data = productItems
    .map((ele) => {
      const cartItem = cartitems.find((item) => item.id === ele.id);
      if (cartItem) {
        return {
          ...ele,
          quantity: cartItem.quantity,
        };
      }

      return null;
    })
    .filter((item) => item !== null);

  const totalitemsprice = cartitems.reduce(
    (acc, item) => acc + 4867.59 * (item.quantity || 0),
    0
  );
  const totalAmount =
    cartitems.reduce(
      (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
      0
    ) + 12;
  const discount = totalitemsprice - totalAmount;

  function handleQuantity(
    type: string,
    id: number | undefined,
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(cartActions.Quantity({ type, id }));
  }

  function handleRemove(
    id: number | undefined,
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(cartActions.removeItem(id));

  }

  function openOverlay(
    item: Product,
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(productActions.setOverlayItem(item));
    dispatch(productActions.setOpenOverlay());
  }

  function handleProceed() {
    setshow(true);
    setTimeout(() => {
      setshow(false);
    }, 1000);
  }
  return (
    <Box className={style.CartWrapper}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Typography sx={{ fontSize: "20px" }}>Cart Items</Typography>
        <IconButton>
          <ShoppingCartIcon sx={{ color: "#000000" }} />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex" }}>
        {data.length === 0 && (
          <Box className={style.emptyCart}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/006/007/non_2x/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
              alt=""
            />
            <Typography>Your cart is empty, Add items</Typography>
          </Box>
        )}
        {data.length !== 0 && (
          <Box className={style.cartCon}>
            {data.map((ele) => (
              <Card
                key={ele.id}
                className={style.cartItem}
                onClick={(e) => openOverlay(ele, e)}
              >
                <Box
                  sx={{ height: "150px", width: "250px", borderRadius: "7px" }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: "100%", width: "100%", borderRadius: "7px" }}
                    image={ele.image}
                    alt="Live from space album cover"
                  />
                </Box>

                <CardContent className={style.cartContent}>
                  <Typography sx={{ fontSize: "20px" }}>{ele.name} </Typography>
                  <Typography sx={{ fontSize: "15px", fontWeight: "300" }}>
                    Delivered By Saturday Feb 21
                  </Typography>
                  <Typography>
                    <span
                      style={{
                        color: "#B60707",
                        textDecoration: "line-through",
                      }}
                    >
                      {" "}
                      $4867.59
                    </span>
                    <span style={{ marginLeft: "14px", color: "green" }}>
                      ${ele.price}
                    </span>
                  </Typography>
                  <Box className={style.QuantityCon}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <IconButton
                        onClick={(e) => handleQuantity("decrease", ele.id, e)}
					    disabled={(ele.quantity ?? 0) < 2}
                      >
                        <SlMinus />
                      </IconButton>
                      <Typography>{ele.quantity}</Typography>

                      <IconButton
                        onClick={(e) => handleQuantity("increase", ele.id, e)}
                      >
                        <SlPlus />
                      </IconButton>
                    </Box>
                    <Box>
                      <Button
                        sx={{
                          color: "crimson",
                          border: "1px solid crimson",
                          fontSize: "11px",
                        }}
                        onClick={(e) => handleRemove(ele.id, e)}
                      >
                        Remove Item
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}

        {data.length !== 0 && (
          <Box className={style.PricingCon}>
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  borderBottom: "1px solid #D4CCCC",
                  padding: "10px",
                }}
              >
                Pricing Cart Items
              </Typography>
            </Box>
            <Box className={style.cartTotal}>
              <Typography sx={{ fontSize: "18px", padding: "10 0px" }}>
                No of Items : {cartitems.length}
              </Typography>

              <Typography sx={{ display: "flex" }}>
                <span style={{ width: "60%" }}>Total Items Price</span>
                <span style={{ width: "40%", fontWeight: "250" }}>
                  ${totalitemsprice.toFixed(2)}
                </span>
              </Typography>
              <Typography sx={{ display: "flex" }}>
                <span style={{ width: "60%" }}> Discount</span>
                <span style={{ width: "40%", fontWeight: "250" }}>
                  ${discount.toFixed(2)}
                </span>
              </Typography>
              <Typography sx={{ display: "flex" }}>
                <span style={{ width: "60%" }}> Delivery Charge</span>
                <span style={{ width: "40%", fontWeight: "250" }}>$10</span>
              </Typography>
              <Typography sx={{ display: "flex" }}>
                <span style={{ width: "60%" }}> Platform Fee</span>
                <span style={{ width: "40%", fontWeight: "250" }}>$2</span>
              </Typography>
              <Typography sx={{ display: "flex" }}>
                <span style={{ width: "60%" }}> Total Amount</span>
                <span style={{ width: "40%", fontWeight: "250" }}>
                  ${totalAmount.toFixed(2)}
                </span>
              </Typography>

              <Button className={style.checkout} onClick={handleProceed}>
                CheckOut
              </Button>
            </Box>
          </Box>
        )}
      </Box>

      {show && (
        <Box className={style.message}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #3CA5FB",
              padding: "3px 30px",
              borderRadius: "4px",
            }}
          >
            <Typography
              sx={{ width: "fit-content", padding: "10px", color: "#3CA5FB" }}
            >
              Your Order Placed Successfully
            </Typography>
            <CheckCircleOutlineIcon
              sx={{ fontSize: "23px", color: "#3CA5FB" }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}
