import { Box, Button, Rating, Typography } from "@mui/material";
import { useStyles } from "./Carousel.style";
import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function Carousel() {
  const style = useStyles();
  const [show, setshow] = useState(false);
  const [value, setValue] = React.useState<number | null>(4);
  const carouselItems = [
    { img: "../../../public/unsplash_NVD_32BBZFE.svg" },
    {
      img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  function handleProceed() {
    setshow(true);
    setTimeout(() => {
      setshow(false);
    }, 1000);
  }

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className={style.carouselWrapper}>
        <Box className={style.carouselCon}>
          <Box className={style.chevronLeft} onClick={scrollPrev}>
            <img
              src="../../../public/entypo_chevron-thin-right.svg"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <div className={style.carouselItemWrapper} ref={emblaRef}>
            <div className={style.carouselWrap}>
              {carouselItems.map((ele) => {
                return (
                  <Box className={style.carouselItem}>
                    <Box className={style.carouselImg}>
                      <img
                        src={ele.img}
                        alt=""
                        width={"100%"}
                        height={"100%"}
                      />
                    </Box>
                    <Box className={style.carouselDesc}>
                      <Typography sx={{ fontSize: "24px" }}>
                        Top Sellers of this week
                      </Typography>
                      <Typography sx={{ fontSize: "40px" }}>
                        The PlayStation 5 (PS5)
                      </Typography>
                      <Typography sx={{ fontSize: "20px", color: "#1D891A" }}>
                        Average Ratings from Last Week
                      </Typography>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(_, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      <Box className={style.carouselBtn}>
                        <Button onClick={handleProceed}>Buy Now</Button>
                        <Button>Add to Cart</Button>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </div>
          </div>
          <Box className={style.chevronRight} onClick={scrollNext}>
            <img
              src="../../../public/entypo_chevron-thin-right.svg"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Box>
      </div>
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
              background: "white",
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
    </>
  );
}

