import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS directly
import { Image } from "./image";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export const CarouselAuto = (props) =>{
    return (
    <Carousel pause={false} interval={3000}>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <Image src="../images/img1.jpg" />
          <Image src="../images/img2.jpg" />
          <Image src="../images/img3.jpg" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
        <Image src="../images/img4.jpg" />
          <Image src="../images/img5.jpg" />
          <Image src="../images/img6.jpg" />
        </div>
      </Carousel.Item>
    </Carousel>
    );
}