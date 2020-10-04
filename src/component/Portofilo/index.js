import React ,{useState,useEffect}from "react";
import Axios from 'axios'
import {
  PortfolioSection,
  PortfolioTitle,
  Span,
  PortfolioList,
  PortfolioItem,
  ImageWrapper,
  Image,
  Overlay,
  OverlaySpan,
} from "./style.js";

const Portofilo = () => {

  const  [images , setImages]=useState([]);


  useEffect( ()=>{
    Axios.get("data.json").then( res => {
      setImages(res.data.portfolio);
    });
  },[])

  const portfoliImages=images.map( (imageItem) => {
    return (
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </ImageWrapper>
    )
  })


  return (
    <PortfolioSection>
        <PortfolioTitle>
          <Span>My</Span> Portfolio
        </PortfolioTitle>
        <PortfolioList>
          <PortfolioItem active>All</PortfolioItem>
          <PortfolioItem>HTML</PortfolioItem>
          <PortfolioItem>Photoshop</PortfolioItem>
          <PortfolioItem>Wordpress</PortfolioItem>
          <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        <div className='box'>{portfoliImages}</div>
    </PortfolioSection>
      
    
  );
};

export default Portofilo;
