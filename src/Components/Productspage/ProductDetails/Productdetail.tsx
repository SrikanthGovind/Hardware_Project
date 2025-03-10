import { Box, Typography, Rating, Avatar, Button } from "@mui/material";
import { useStyles } from "./Productdetail.style";
import { BsDot } from "react-icons/bs";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { Product, RootState } from "../../../types";
import { cartActions } from "../../../Redux";

export default function Productdetail() {
  const style = useStyles();
  const [value, setValue] = React.useState<number | null>(3);
  const productData = useSelector((state: RootState) => state.product.items);
  const selectedProduct = useSelector(
    (state: RootState) => state.product.selectedProduct
  );
  const dispatch = useDispatch();
  const reviews = new Array(5).fill({});

  const data = productData.filter((ele) => ele.id === selectedProduct);

  function handleAddToCart(data: Product) {
    dispatch(cartActions.addItemtoCart(data));
  }
  return (
    <>
      <Box className={style.productDetailsCon}>
        <Box className={style.productDesc}>
          <Box className={style.productImageWrapper}>
            <Box className={style.productImageCon}>
              <Box className={style.chevronLeft}>
                <img
                  src="../../../../public/entypo_chevron-thin-right.svg"
                  alt=""
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
              <Box className={style.productImage}>
                <img
                  src={data[0].image}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
              <Box className={style.chevronRight}>
                <img
                  src="../../../../public/entypo_chevron-thin-right.svg"
                  alt=""
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
            </Box>
            <Box className={style.pagination}>
              <span style={{ color: "#3CA5FB" }}>
                <GoDotFill />
              </span>
              <span style={{ color: "#D9D9D9" }}>
                <GoDotFill />
              </span>
              <span style={{ color: "#D9D9D9" }}>
                <GoDotFill />
              </span>
              <span style={{ color: "#D9D9D9" }}>
                <GoDotFill />
              </span>
              <span style={{ color: "#D9D9D9" }}>
                <GoDotFill />
              </span>
            </Box>
          </Box>
          <Box className={style.productDetail}>
            <Typography sx={{ fontSize: "25px" }}>{data[0].name}</Typography>
            <Typography sx={{ fontSize: "17px" }}>
              {data[0].description}
            </Typography>
            <Box className={style.DescList}>
              <Typography sx={{ display: "flex" }}>
                <span style={{ fontWeight: "500" }}>
                  {" "}
                  Items Dimensions LxWxH :{" "}
                </span>
                <span style={{ fontWeight: "250" }}>
                  {data[0].dimensions?.width} x {data[0].dimensions?.height} x{" "}
                  {data[0].dimensions?.length}
                </span>
              </Typography>
              <Typography sx={{ display: "flex" }}>
                <span style={{ fontWeight: "500" }}> Item Weight : </span>
                <span style={{ fontWeight: "250" }}> 950g</span>
              </Typography>
              <Typography>
                <span style={{ color: "#B60707" }}> $4767.59</span>
                <span style={{ marginLeft: "14px" }}>${data[0].price}</span>
              </Typography>
            </Box>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(_, newValue) => {
                setValue(newValue);
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: "500" }}>Color : </Typography>
              <Box className={style.BtnCon}>
                <Button className={style.colorBtn}>Black</Button>
                <Button className={style.colorBtn}>Red</Button>
                <Button className={style.colorBtnSelected}>White</Button>
                <Button className={style.colorBtn}>Blue</Button>
              </Box>
            </Box>
            <Box className={style.productBtn}>
              <Button onClick={() => handleAddToCart(data[0])}>
                Add to Cart
              </Button>
              <Button>Buy Now</Button>
            </Box>
          </Box>
        </Box>
        <Box className={style.productOverview}>
          <Typography sx={{ fontSize: "23px" }}>Product Overview</Typography>
          <Box className={style.OverviewTextCon}>
            <Typography component={"li"} sx={{fontSize:'18px !important'}}>
              A {data[0].name} is an input device used to control video games,
              simulations, and various other types of software applications.{" "}
            </Typography>
            <Typography component={"li"} sx={{fontSize:'18px !important'}}>
              It is commonly used in gaming, flight simulation, and industrial
              controls.{" "}
            </Typography>
            <Typography component={"li"} sx={{fontSize:'18px !important'}}>
              The {data[0].name} allows precise movement control with a physical
              stick that can move in multiple directions.
            </Typography>
          </Box>
        </Box>
        <Box className={style.productTable}>
          <Typography sx={{ fontSize: "23px" }}>
            Product Specification
          </Typography>
          <Box className={style.productTableItemsCon}>
            <Box className={style.productSpecificationItem}>
              <Typography className={style.productType}>
                Product Name
              </Typography>
              <Typography className={style.productValue}>
                {data[0].name}
              </Typography>
            </Box>
            <Box className={style.productSpecificationItemEven}>
              <Typography className={style.productType}>
                Product Type
              </Typography>
              <Typography className={style.productValue}>
                {data[0].category}
              </Typography>
            </Box>
            <Box className={style.productSpecificationItem}>
              <Typography className={style.productType}>Dimension</Typography>
              <Typography className={style.productValue}>
                {data[0].dimensions?.width} x {data[0].dimensions?.height}
              </Typography>
            </Box>
            <Box className={style.productSpecificationItemEven}>
              <Typography className={style.productType}>
                {data[0].dimensions?.width}{" "}
              </Typography>
              <Typography className={style.productValue}>
                6.3 Centimeters
              </Typography>
            </Box>
            <Box className={style.productSpecificationItem}>
              <Typography className={style.productType}>
                Compatability
              </Typography>
              <Typography className={style.productValue}>
                PS5, PS4, and PC, Sony 3D Audio, Modular Buttons/Clutch
                Triggers/Joystick
              </Typography>
            </Box>
            <Box className={style.productSpecificationItemEven}>
              <Typography className={style.productType}>
                Connectivity
              </Typography>
              <Typography className={style.productValue}>
                Used as both Wired / Wireless
              </Typography>
            </Box>
            <Box className={style.productSpecificationItem}>
              <Typography className={style.productType}>Sensitivity</Typography>
              <Typography className={style.productValue}>
                {" "}
                Sensitivity adjustment for finer control (on some models).
              </Typography>
            </Box>
            <Box className={style.productSpecificationItemEven}>
              <Typography className={style.productType}>Buttons</Typography>
              <Typography className={style.productValue}>
                8-12 programmable buttons, including action and shoulder
                buttons.
              </Typography>
            </Box>
            <Box className={style.productSpecificationItem}>
              <Typography className={style.productType}>
                Multi profile support
              </Typography>
              <Typography className={style.productValue}>
                Ability to create and store multiple control profiles for
                different games or scenarios.
              </Typography>
            </Box>
            {data[0].specifications &&
              Object.entries(data[0].specifications).map(([key, value],index) => (
                <Box key={key} className={
                  index % 2 === 0
                  ? style.productSpecificationItemEven 
                  : style.productSpecificationItem
              }>
                  <Typography className={style.productType}>{key}</Typography>
                  <Typography className={style.productValue}>
                    {value}
                  </Typography>
                </Box>
              ))}
          </Box>
        </Box>
        <Box className={style.productReviews}>
          <Typography sx={{ fontSize: "23px" }}>People Reviews</Typography>
          <Box className={style.reviewsCon}>
            {
                reviews.map((ele)=>{
                   return  <Box key={ele} className={style.reviews}>
                   <Box>
                     <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww" />
                   </Box>
                   <Box
                     sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                   >
                     <Box sx={{ display: "flex", alignItems: "center" }}>
                       <Typography sx={{ fontSize: "18px" }}>
                         Srikanth Govind
                       </Typography>
                       <Box
                         sx={{
                           fontSize: "25px",
                           display: "flex",
                           alignItems: "center",
                         }}
                       >
                         <BsDot />
                       </Box>
                       <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>
                         7 weeks ago
                       </Typography>
                     </Box>
                     <Rating
                       name="simple-controlled"
                       value={value}
                       onChange={(_, newValue) => {
                         setValue(newValue);
                       }}
                     />
                     <Typography fontSize={"15px"}>
                       I have used this product for last 3 months .it’s worth every
                       penny i spent . I love this Product so much
                     </Typography>
                   </Box>
                 </Box>
                })
            }
         

          </Box>
        </Box>
      </Box>
    </>
  );
}
