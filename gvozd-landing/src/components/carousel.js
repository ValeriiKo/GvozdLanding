import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS directly
import { Image } from "./image";

export const CarouselAuto = (props) =>{
    return (
    <Carousel pause={false} interval={3000}>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <Image src="../images/img1.jpg" />
          <Image src="../images/img2.jpg" />
          <Image src="../images/img3.jpg" />
          <Image src="../images/img4.jpg" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <Image src="../images/img2.jpg" />
          <Image src="../images/img3.jpg" />
          <Image src="../images/img4.jpg" />
          <Image src="../images/img5.jpg" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <Image src="../images/img3.jpg" />
          <Image src="../images/img4.jpg" />
          <Image src="../images/img5.jpg" />
          <Image src="../images/img6.jpg" />
        </div>
      </Carousel.Item>
    </Carousel>
    );
}