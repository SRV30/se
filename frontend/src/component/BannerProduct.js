import React, { useEffect, useState } from "react";
import image1 from "../assest/banner/img1.JPG";
import image2 from "../assest/banner/img2.JPG";
import image3 from "../assest/banner/img3.JPG";
import image4 from "../assest/banner/img4.JPG";
import image5 from "../assest/banner/img5.JPG";
import image6 from "../assest/banner/img6.JPG";
import image7 from "../assest/banner/img7.JPG";
import "./banner.css";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const desktopImages = [image1, image2, image3, image4, image5, image6, image7];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % desktopImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + desktopImages.length) % desktopImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentImage, desktopImages.length]);

  return (
    <div className="container mx-auto px-4 rounded banner-container">
      <div className="h-56 md:h-80 w-full relative">
        <div className="absolute z-10 h-full w-full md:flex items-center justify-between hidden">
          <button onClick={prevImage} className="bg-white shadow-md rounded-full p-1 banner-button">
            <FaAngleLeft />
          </button>
          <button onClick={nextImage} className="bg-white shadow-md rounded-full p-1 banner-button">
            <FaAngleRight />
          </button>
        </div>

        {/** Desktop and tablet version */}
        <div className="hidden md:flex h-full w-full overflow-hidden">
          {desktopImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-w-full min-h-full transition-transform duration-500 ease-in-out"
              key={index}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img src={imageURL} className="w-full h-full object-cover" alt={`banner-${index}`} />
            </div>
          ))}
        </div>

        {/** Mobile version */}
        <div className="md:hidden h-full w-full">
          <img src={desktopImages[currentImage]} className="w-full h-full object-cover" alt={`banner-${currentImage}`} />
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;