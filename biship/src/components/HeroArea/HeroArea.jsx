import React from "react";
import "./HeroArea.scss";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

const HeroArea = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="heroAreaSection">
      <div className={`container ${i18n.language == "he" && "hebrew"}`}>
        <div
          className={`heroAreaContentBody ${i18n.language == "he" && "hebrew"}`}
        >
          <div className="content">
            <h1>{parse(t("hero_title"))}</h1>
            <p>{t("hero_details")}</p>
            <Link
              activeClass="active"
              className="contactUs"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              {t("contact_us")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
