import Carousel from "../Productspage/Carousel/Carousel";
import Category from "../Productspage/Category/Category";
import Combo from "../Productspage/Combo/Combo";
import Deals from "../Productspage/Deals/Deals";
import Products from "../Productspage/PopularProduct/Products";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
    <Carousel/> 
    <Products/>
     <Deals/>
     <Category/>
     <Combo/>
     <Footer/>
    </>
  );
}
