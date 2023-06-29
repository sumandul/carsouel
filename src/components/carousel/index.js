import React, { useRef } from "react";
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
  height: 100%;
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
// const Conatiner = styled.btn_container`
//   background-color: red;
//   /* Add any other custom styles */
// `;

const Carousel = () => {
  const swiperRef = useRef();
  return (
    <div style={{ position: "relative" }}>
      <PP
        breakpoints={{
          100: { slidesPerView: 1, spaceBetween: 80 },
          320: { slidesPerView: 1, spaceBetween: 80 },
          480: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 50 },
          1024: { slidesPerView: 4, spaceBetween: 15 },
        }}
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          {" "}
          <SwiperSlideContainer>
            <StyledImage src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
          </SwiperSlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SwiperSlideContainer>
            <StyledImage src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
          </SwiperSlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SwiperSlideContainer>
            <StyledImage src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
          </SwiperSlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SwiperSlideContainer>
            <StyledImage src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
          </SwiperSlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SwiperSlideContainer>
            <StyledImage src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
          </SwiperSlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SwiperSlideContainer>
            <StyledImage src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
          </SwiperSlideContainer>
        </SwiperSlide>
      </PP>
      <div
        className="btn_container"
        style={{
          display: "flex",
          gap: "20px",
          position: "absolute",
          top: "-18%",
          right: "0%",
          zIndex: 999,
        }}
      >
        <Button onClick={() => swiperRef.current?.slidePrev()}>
          <MdArrowBackIosNew />
        </Button>
        <Button onClick={() => swiperRef.current?.slideNext()}>
          <MdArrowForwardIos />
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
