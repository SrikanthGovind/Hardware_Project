import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { useStyles } from "./Search.style";
import { FaFilter } from "react-icons/fa";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product, RootState } from "../../../types";
import { productActions } from "../../../Redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function Search() {
  const [value, setValue] = React.useState<number | null>(3);
  const data = useSelector(
    (state: RootState) => state.product.searchedProducts
  );
  const check = useSelector((state: RootState) => state.product.checkedItems);
  const style = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function openOverlay(item: Product, e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(productActions.setOverlayItem(item));
    dispatch(productActions.setOpenOverlay());
  }
  function handleProduct(id: number | undefined) {
    dispatch(productActions.setSelectedProduct(id));
    navigate("/productdetails");
  }

  const brand: (string | undefined)[] = [];
  const color: (string | undefined)[] = [];
  data.forEach((ele) => {
    if (!brand.includes(ele.brand)) {
      brand.push(ele.brand);
    }
    if (!color.includes(ele.color?.toLowerCase())) {
      color.push(ele.color?.toLowerCase());
    }
  });

  function handlecheckbox(
    value: string | undefined,
    e: React.SyntheticEvent<Element, Event>,
    key: string | undefined
  ) {
    e.stopPropagation();
    const target = e.target as HTMLInputElement;
    const { checked } = target;

    if (checked) {
      dispatch(productActions.setcheckedItems({ key, value }));
    } else {
      const filterpro = check
        .map((ele) => {
          if (ele.key === key) {
            if (ele.values?.length !== 0) {
              const newValues = ele.values?.filter((item) => item !== value);
              if (newValues?.length === 0) {
                return null;
              }
              return {
                ...ele,
                values: newValues,
              };
            } else {
              return ele;
            }
          }
          return ele;
        })
        .filter((ele) => ele !== null);

      dispatch(productActions.setcheckedItems(filterpro));
    }
  }

  function handleWishlist(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: Product
  ) {
    e.stopPropagation();
    dispatch(productActions.setWishlistItems(item));
  }

  const filteredProducts = data.filter((product) => {
    return check.every((filter) => {
      if (!filter.values || !product.price) {
        return false;
      }
      switch (filter.key) {
        case "color":
          return filter.values.some(
            (selectedColor) =>
              product.color?.toLowerCase() === selectedColor.toLowerCase()
          );
        case "brand":
          return filter.values.some(
            (selectedBrand) =>
              product.brand?.toLowerCase() === selectedBrand.toLowerCase()
          );
        case "price":
          return (
            (filter.values[0] === "100" && product.price <= 100) ||
            (filter.values[0] === "400" && product.price <= 400) ||
            (filter.values[0] === "1000" && product.price <= 1000) ||
            (filter.values[0] === "1500" && product.price > 1000)
          );
        case "stock":
          return product.availability?.toLowerCase().includes("stock");
        default:
          return true;
      }
    });
  });


  const location = useLocation();
  useEffect(() => {
    dispatch(productActions.setcheckedItems([]));
  }, [dispatch, location]);


  const dataTodisplay: Product[] | string =
    filteredProducts.length !== 0 ? filteredProducts : "no products";

  return (
    <Box className={style.SearchWrapper}>
      <Typography sx={{ fontSize: "30px" }}>Search Results</Typography>
      <Box className={style.SearchCon}>
        <Box className={style.filterCon}>
          <Box sx={{ display: "flex", borderBottom: "1px solid #AEAEAE " }}>
            <IconButton sx={{ color: "#434343" }}>
              <FaFilter />
            </IconButton>
            <Typography
              sx={{ fontSize: "25px", fontWeight: "300", color: "#434343" }}
            >
              All Filters
            </Typography>
          </Box>
          <Box className={style.filters}>
            <Typography className={style.filterTitle}>Price Range</Typography>
            <FormGroup className={style.formGroup}>
              <FormControlLabel
                className={style.filter}
                control={<Checkbox />}
                label="below $100"
                onChange={(e) => handlecheckbox("100", e, "price")}
              />
              <FormControlLabel
                className={style.filter}
                control={<Checkbox />}
                label="below $400"
                onChange={(e) => handlecheckbox("400", e, "price")}
              />
              <FormControlLabel
                className={style.filter}
                control={<Checkbox />}
                label="below $1000"
                onChange={(e) => handlecheckbox("1000", e, "price")}
              />
              <FormControlLabel
                className={style.filter}
                control={<Checkbox />}
                label="More than $1000"
                onChange={(e) => handlecheckbox("1500", e, "price")}
              />
            </FormGroup>
          </Box>
          <Box className={style.filters}>
            <Typography className={style.filterTitle}>Color</Typography>
            <FormGroup className={style.formGroup}>
              {color.map((ele) => {
                return (
                  <FormControlLabel
                    className={style.filter}
                    control={<Checkbox />}
                    onChange={(e) => handlecheckbox(ele, e, "color")}
                    label={ele?.toUpperCase()}
                  />
                );
              })}
            </FormGroup>
          </Box>
          <Box className={style.filters}>
            <Typography className={style.filterTitle}>Brand</Typography>
            <FormGroup className={style.formGroup}>
              {brand.map((ele) => {
                return (
                  <FormControlLabel
                    className={style.filter}
                    control={<Checkbox />}
                    onChange={(e) => handlecheckbox(ele, e, "brand")}
                    label={ele}
                  />
                );
              })}
            </FormGroup>
          </Box>
          <Box className={style.filters}>
            <Typography className={style.filterTitle}>Availability</Typography>
            <FormGroup className={style.formGroup}>
              <FormControlLabel
                className={style.filter}
                checked
                control={<Checkbox />}
                label="In Stock"
              />
            </FormGroup>
          </Box>
        </Box>
        <Box className={style.productItemCon}>
          {typeof dataTodisplay === "string" ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection:'column',
                width: "100%",
              }}
            >
              <Box sx={{ width: "400px", height: "300px" }}>
                <img
                  src="https://stores.lifestylestores.com/VendorpageTheme/Enterprise/EThemeForLifestyleUpdated/images/product-not-found.jpg"
                  width={"100%"}
                  height={"100%"}
                  alt=""
                />
              </Box>
              <Typography sx={{color:"grey", fontSize:'20px'}}>Your search did not match any products</Typography>
              <Typography sx={{color:"grey", fontSize:'14px'}}>Please try again.</Typography>
            </Box>
          ) : (
            dataTodisplay.length !== 0 &&
            dataTodisplay.map((ele: Product) => {
              return (
                <Card
                  onClick={() => handleProduct(ele.id)}
                  key={ele.id}
                  className={style.productItem}
                >
                  <IconButton
                    className={style.SaveIcon}
                    sx={{
                      position: "absolute",
                      color: ele.isAdded ? "red" : "black",
                    }}
                    onClick={(e) => handleWishlist(e, ele)}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>

                  <CardMedia
                    component="img"
                    width="191"
                    height="157"
                    image={ele.image}
                    alt="dell image"
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent className={style.productItemContent}>
                    <Typography>{ele.name?.slice(0, 20) + "..."}</Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(_, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    <Typography>
                      <span style={{ color: "#B60707" }}> $98767.59</span>
                      <span style={{ marginLeft: "14px" }}>${ele.price}</span>
                    </Typography>
                  </CardContent>

                  <Box className={style.QuickView}>
                    <Button onClick={(e) => openOverlay(ele, e)}>
                      Quick View
                    </Button>
                  </Box>
                </Card>
              );
            })
          )}
        </Box>
      </Box>
    </Box>
  );
}
