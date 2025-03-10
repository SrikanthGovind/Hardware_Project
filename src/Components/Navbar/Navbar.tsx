import {
  AppBar,
  Badge,
  Box,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuList,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useStyles } from "./Navbar.style";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../Redux";
import { Product, RootState } from "../../types";
export default function Navbar() {
  const style = useStyles();
  const [showOverlay, setshowOverlay] = useState(false);
  const [inputvalue, setinputvalue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartquantity = useSelector((state: RootState) => state.cart.items);
  const data = useSelector((state: RootState) => state.product.items);
  const wishlistquantity = useSelector(
    (state: RootState) => state.product.wishlistItems
  );
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const handleMouseAction = (query: string) => {
    const filteredproducts = data.filter(
      (ele) =>
        ele.category?.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        ele.name?.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    setFilteredProducts(filteredproducts);

    setTimeout(() => {
      setshowOverlay((prev) => !prev);
    }, 100);
  };
  // let Timeout: number | undefined;

  function handleinput(e: React.ChangeEvent<HTMLInputElement>) {
    // clearTimeout(Timeout);
    // Timeout = setTimeout(() => {
      setinputvalue(e.target.value);
    // }, 1000);
  }
  function handleSearchclick() {
    if (inputvalue === "") return;
    dispatch(productActions.setsearchedProducts(inputvalue));
    navigate("/search");
    setinputvalue("");
  }

  function handleProduct(id: number | undefined) {
    dispatch(productActions.setSelectedProduct(id));
    navigate("/productdetails");
    setshowOverlay((prev) => !prev);
  }

  const location = useLocation();
  useEffect(() => {
    setshowOverlay(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setshowOverlay(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setshowOverlay(false);
    }
      window.addEventListener('click',handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  const arr = [
    "Laptop",
    "Mouse",
    "Graphics Card",
    "Mobile",
    "Keyboard",
    "Monitor",
    "Camera",
    "Headset",
    "Storage",
  ];

  return (
    <>
      <AppBar className={style.header} position="fixed">
        <Toolbar className={style.headerToolbar}>
          <Box className={style.logo}>
            <Link to={"/"}>
              <img
                src="../../../public/Quantum Hardware.svg"
                width={"100%"}
                height={"100%"}
              />
            </Link>
          </Box>
          <Box className={style.searchCon}>
            <TextField
              id="filled-size-normal"
              placeholder="Find Your Products"
              className={style.textField}
              value={inputvalue} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleinput(e)
              }
            />
            <Button
              sx={{
                width: "10%",
                height: "100%",
                borderRadius: "0",
                borderLeft: "1px solid #ADB7BA",
              }}
              onClick={handleSearchclick}
            >
              <img src="../../../public/Vector.svg" />
            </Button>
          </Box>
          <Box>
            <MenuList className={style.listCon}>
              <ListItem
                className={style.listItem}
                component={Link}
                to={"/cart"}
              >
                <ListItemIcon>
                  <Badge color="secondary" badgeContent={cartquantity.length}>
                    <img
                      src="../../../public/bitcoin-icons_cart-outline.svg"
                      width={"30px"}
                      height={"30px"}
                    />
                  </Badge>
                </ListItemIcon>
                <ListItemText>Cart</ListItemText>
              </ListItem>
              <ListItem
                className={style.listItem}
                component={Link}
                to={"/wishlist"}
              >
                <ListItemIcon sx={{ color: "black" }}>
                  <Badge
                    color="secondary"
                    badgeContent={wishlistquantity.length}
                  >
                    <FavoriteBorderOutlined />
                  </Badge>
                </ListItemIcon>
                <ListItemText>Wishlist</ListItemText>
              </ListItem>
              <ListItem className={style.listItem} component={Link} to={""}>
                <ListItemIcon
                  sx={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid #000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "100%",
                  }}
                >
                  <img
                    src="../../../public/person.svg"
                    alt=""
                    width={"16px"}
                    height={"16px"}
                  />
                </ListItemIcon>
                <ListItemText>
                  <span>Login</span>
                  <span>/</span>
                  <span>Signup</span>
                </ListItemText>
              </ListItem>
            </MenuList>
          </Box>
        </Toolbar>
      </AppBar>
      <Box className={style.floatingListCon}>
        {arr.map((ele) => {
          return (
            <ListItem
              className={style.navItem}
              onClick={() => handleMouseAction(ele)}
            >
              <ListItemText>{ele}</ListItemText>
            </ListItem>
          );
        })}
      </Box>
      {showOverlay && (
        <Box className={style.HoverOverlayCon}>
          <Box className={style.HoverOverlayWrapper}>
            {filteredProducts.length !== 0 &&
              filteredProducts.map((ele) => {
                return (
                  <Box
                    className={style.ListItem}
                    onClick={() => handleProduct(ele.id)}
                  >
                    <img
                      src={ele.image}
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "3px",
                      }}
                    />
                    <Typography className={style.ListText}>
                      {ele.description?.slice(0, 60) + "..."}
                    </Typography>
                  </Box>
                );
              })}
          </Box>
        </Box>
      )}
    </>
  );
}
