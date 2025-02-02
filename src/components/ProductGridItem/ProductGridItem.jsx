import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import myImage from './loader.jpg'
import { Carousel } from "react-responsive-carousel";
import React, { useState } from "react";

const ProductGridItem = ({ id, title, price, thumbnail, backgroundColor, accentColor, textColor }) => {
    const [autoPlay, setAutoPlay] = useState(false);
    const style = {
        borderLeft: `solid 3px ${accentColor}`,
        borderRadius: '5px',
        padding: '10px',
        backgroundColor: backgroundColor,
        color: textColor,
    }

    const imgStyle = {
        borderRadius: '5px'
    }

    const priceStyle = {
        textAlign: 'right',
        fontSize: '11px',
        fontWeight: 'bold',
        marginTop: '10px',
        marginRight: '10px',
        padding: '5px',
        backgroundColor: accentColor,
        borderRadius: '2px',
    }



    return (
        
        
   
      


        <div style={style} onMouseEnter={() => setAutoPlay(true)} onMouseLeave={() => setAutoPlay(false)} >
        <Carousel autoPlay={autoPlay} infiniteLoop interval={1000}  showThumbs={false} showStatus={false}>
      <div>
         <img src={myImage} style={imgStyle} alt={title} />
         
     </div>
     <div>
         <img src={myImage} style={imgStyle} alt={title} />
         
     </div>
      
        </Carousel>
        <div><Link to={`/product/${id}`}><p>{title}</p>
        <p style={priceStyle}>£ {price}</p></Link></div>
 </div>
       
    )

}

ProductGridItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
    backgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default ProductGridItem
