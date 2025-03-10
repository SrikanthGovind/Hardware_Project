import { Box, Card, CardContent, Typography } from "@mui/material";
import { useStyles } from "./Category.style";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productActions } from "../../../Redux";
export default function Category() {
  const style = useStyles();
  const category = [
    {
      img: "data:image/jpeg;base64,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",
      name: "Laptop",
    },
    {
      img: "data:image/jpeg;base64,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2GVktnVcsdO3i0fpZPSzSGD1zH0UHLXzLbtlOzbEK+zmRd1Cf3012NI0N2NtmfpuIFtN4XedluzHDqKzmQ97KNe9ms9wPNrbZWnqBfqtzRXPdj+yOho8r5G/SZhY55QMjTzZFuHqcxHNdCREBERAREQEREBERAREQEREBUyPDQS4gAC5JNgAN5J4BVLCxWk7xhb/ALvwNuKDmHaT2md0HQ02YaWzAlr3eh3xs6+Y8Mu86bsV2cVWKubU1bjFTHVptZ728oWEWa3659gd66fhvZrAZ+/qmiSxzNjOrSfik+L7O7nfct+AQR+BYHT0cQhpomxsHAb3H4nOOrndSpFEQEREBERBTJGHaOAPqAVaZRxg3EbAejQPyV9EBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q==",
      name: "Peripherals",
    },
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAh1BMVEX///8AAADZ2dnCwsLU1NTd3d20tLTAwMDX19fp6enFxcW9vb3S0tKurq7b29vPz8+oqKhlZWVvb2+jo6O4uLj5+fmenp6ZmZlVVVXu7u7k5ORgYGCRkZH19fUkJCRGRkY2NjZ7e3tNTU1zc3OGhoY+Pj4dHR0PDw+JiYksLCwXFxdBQUExMTFlG8yoAAAGUUlEQVR4nO3dCVejSBSGYaUgQBVbBIKQYBt3e/z/v29qAbKp5LYLJHxvn5nTM6enDz5zq4KGai8uEEIIja186As4gfLSt7NivXy9LsH1UXntWyx9mN+9Xpru/GroaxpfeenE4erq+vH5cqdr3xn60kZU7XtisZ7/eb18N2Cp8rJ6d5SAtZ3cldzFevnn5lOktuU0sdQozeQo3X4+SvtY5bSw1CilR4/SRLH+bZSmhlX7kbxX+sdRmgpWXqtRuv/aKO1jnd0GL+8ov22U9rHOZ7JqP5gVcpS+H+mMsOQo8eRnRumMsGr1xYAfHaUzwDKjNP+FUTplrF8fpX2sk3g1zP04fBlglPaxxj9ZyXCjtNcJTNZyaKOuE8CaD23UBSxCwCJ0Ahs8sAhdDW3UdQLLEFiERoSFZXh8mCxCwCIELELAIgQsQsAiBCxCwCIELELAIgQsQsAiNAfW8QGLEJYhIWARAhYhYBECFiFgEQIWIdxnEQIWIWARAhYhYBECFiFgEQIWIWARAhYhYBECFiFgEQIWIWARAhYhYBECFqG5Hw2N0deYsDBZR4fJIoTJIoTJIgQsQsAiBCxCwCIELELAIgQsQsAiBCxCwCIELELAIgQsQsAiBCxCwCIELELAIgQsQsAiBCxCwCIELELAIgQsQnPfGhqjL2ARAhah8fx58CewZ4XF6mF9Nb++e3z9OzTW2Ccr96IocrqsgDMxS1IleD9f3v339vSLWGOfrDwOAtvbZKmiaE8wloKhFHxZ318tr//c/sj3Bhn/ZF2wcDabZZkQLmNcFssCe9tvi9DZysrcLAuTRfEil7EUfHz94jdZOwGsi9KJ7JhzkWUzXag69DOA1sYuLoriIXZ2AB1PDmHWLWPaRngKWFvldV36VeVYMXeFVkuSJAw7vs5P8cWMCRZZB+2u4Ur+dup/RreMP94Ix79nfV6eKz3Hss2Hm6RpKvnk4KSJxBOu2w5f46fG75CvEXS2BStH/ZZZmC5WzTJ+uzpxrMOUnl9dPj8/P9283T7eXS/n9+tV2gyfXrw7y/djPyXobAM61Uktw6NbXT493ZieZH8Xet5CNXoLlR7Azd4nDrc/ZdX81eadKVYp956722bvfn6+vNAygrHYcaKLuizlnHhynek7DmUn9Rq/ju/Qrzq3ZbhX7TsxcyuDJT/6WI7K4a+Sa9dsffKFQ71W6umT+1U7foaPO2eO1ab2q5DxD7AO0y8cVSTvNDjLQjl98kcY2j99meNIYc3kqjoW6zDF973XNNq+jjWhNBbXWBPZeL4QsI4vB9bxAYtQ3m3wFrD6AhahFosBq78GS366Y3m4z+oJWIQ2WB6w+jJYruvGng2sniSW/CFcEdvA6is3X/wTggOrN4OVKazAG/pixl6t37HIsowHwOqrTpMkTDRWPJEvd/57tX47UX0uHQOrr22sYOiLGXstVsjiOB76YsZerd9llXs8sPqr9fuoYZi4wOptg8U5sHoqC/0OvcbiQ1/M2CsL9YZ8kqQCWL0ZrDRdCM6A1VO5WhSFXIqLjAGrr3IlreR0FRlzgbWTevS0LH3fr5r8qMUSTABLlatnrCLb5NnbcY1VFCu1wVd+WQ99rUNW+44XByo7aGt+Zh5cXqkklryDb57li6oyH/qyB6h04vfTTykzV2SzdGV6cTlrtLSYUw598b/boZR5lJszyaROGuhDFuv1+uFFzpaQ89dimcGLpuNVb8akUzJMCipT5zES9XS8vMlKwlkmAs+zN1J6PwusqSxHfhAzmaky51dm+gH4LBOMe1FkBc3j713BRLRc9n6uycxXJv8uhOsyHtsSy25nyrxsylmbyEqsJIGR2TbqUv+umzf1eJaaLDlK21i2bU3lyVrOzQP+7SCJ7h8VHeu0mhuGfSx1hMyZzDuJTDTbudiRcjfrs9vNJJatTjRZ3tYajKw4HP03EPiucrE5P7Lv5e5qKSzP6qzkXmXHPAvD2dAfwy8WNcc1s86sWY+7q1BrBeoEk0JS9xlupv7LZGKfK1YsSZLNMaX25a89raS8ttiYuakIzdlOPsFPEyuujyV1aPpwYXt/1bY5Nayd0pBXQ1/3YPkenzVHWQ8Kk5ZIHTxMF6EbVBO5Ff2ssrLMiedFob+W3KY/3XF5bFWOP8Gl119egwUhhL7Q/9ClxAIvW7sHAAAAAElFTkSuQmCC",
      name: "Monitor",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmiNXK7ie-OJ16ET8LpzNdn20C9tfI_wGzg&s",
      name: "Storage",
    },
    {
      img: "data:image/jpeg;base64,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",
      name: "CPU",
    },
    {
      img: "data:image/jpeg;base64,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",
      name: "Graphics Card",
    },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleCategory(name: string) {
    dispatch(productActions.setsearchedProducts(name));
    navigate("/search");
  }

  return (
    <Box className={style.categoryCon}>
      <Typography sx={{ fontSize: "23px" }}> Products By Category</Typography>
      <Box className={style.categoryItemWrapper}>
        {category.map((ele) => {
          return (
            <Card
              onClick={() => handleCategory(ele.name)}
              className={style.categoryItem}
            >
              <Box className={style.categoryImg}>
                <img width={"100%"} height={"100%"} src={ele.img} />
              </Box>
              <CardContent className={style.categoryItemContent}>
                <Typography sx={{ fontSize: "16px" }}>{ele.name}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
