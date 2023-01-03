import { Container } from "@mui/material";
import React from "react";
import "./Services.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import serviceIllustration from "../../assets/images/serviceIllustration.png";

import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="sectionServices" name="services">
      <Container>
        <div className="services">
          <h6>{t("service_top")}</h6>
          <h2>{t("service_title")}</h2>
          <p className="des">{t("service_subtitle")}</p>
          <div className="serviceIlustration">
            <img src={serviceIllustration} alt="serviceIllustration" />
          </div>
          <div className="servicesGrid">
            {t("service_list", { returnObjects: true }).map((item) => (
              <div
                className={`gridContent ${i18n.language == "he" && "hebrew"}`}
                key={item.title}
              >
                <img src={item.icon} alt="icon" />
                <span>{item.title} </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="sliderDiv">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={15}
          centeredSlides={true}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {t("service_list", { returnObjects: true }).map((item) => (
            <SwiperSlide key={item.title}>
              <div
                className={`gridContent ${i18n.language == "he" && "hebrew"}`}
              >
                <img src={item.icon} alt="icon" />
                <span>{item.title} </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
