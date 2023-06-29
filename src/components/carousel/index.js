import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/modules/navigation/navigation.scss"; // Navigation module
// import "swiper/modules/pagination/pagination.scss";
const SwiperSlideContainer = styled.div`
  width: 100%;
  height: 300px;
`;
const PP = styled(Swiper)`
  position: relative;
  margin-top: 100px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  border-radius: 5px;
`;
const Button = styled.button`
  border: 1px solid #dfe1e5;
  border-radius: 50%;
  padding: 10px;

  /* Add any other custom styles */
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  top: -18%;
  right: 0%;
  z-index: 999;
  @media (max-width: 320px) {
    top: -21% !important;
  }
  @media (max-width: 480px) {
    top: -20% !important;
  }
  @media (min-width: 1024px) {
    top: -21% !important;
  }
  @media (max-width: 1500px) {
    top: -30%;
  }
`;

const Carousel = ({ image }) => {
  console.log(image);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  console.log(isBeginning, isEnd);

  const handleSlideChange = () => {
    setIsBeginning(swiperRef.current?.isBeginning);
    setIsEnd(swiperRef.current?.isEnd);
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };
  const swiperRef = useRef();
  return (
    <div style={{ position: "relative" }}>
      <PP
        breakpoints={{
          100: { slidesPerView: 1, spaceBetween: 80 },
          320: { slidesPerView: 1, spaceBetween: 80 },
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 15 },
          1200: { slidesPerView: 4, spaceBetween: 15 },
        }}
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {image.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <SwiperSlideContainer>
                <StyledImage src={item.image} />
              </SwiperSlideContainer>
            </SwiperSlide>
          );
        })}
      </PP>
      <ButtonContainer>
        {!isBeginning && (
          <Button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <MdArrowBackIosNew />
          </Button>
        )}

        {!isEnd && (
          <Button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <MdArrowForwardIos />
          </Button>
        )}
      </ButtonContainer>
    </div>
  );
};

export default Carousel;
