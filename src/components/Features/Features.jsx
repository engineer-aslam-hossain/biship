import { Container } from "@mui/material";
import React from "react";
import FeatureTop from "./FeatureTop";

import illustration from "../../assets/images/illustration.png";
import hebrewIllustration from "../../assets/images/hebrew_ilustration.png";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`sectionFeatures ${i18n.language == "he" && "hebrew"}`}
      name="features"
    >
      <Container>
        <FeatureTop />
        <div className={`featuresGrid ${i18n.language == "he" && "hebrew"}`}>
          <div className="imageContainer">
            <img
              src={i18n.language == "he" ? hebrewIllustration : illustration}
              alt="illustration"
            />
          </div>
          <div className="bishipMeet">
            <h6>{t("features_top")}</h6>
            <h2>{t("features_title")}</h2>
            <p className="des">{t("features_subtitle")}</p>
            <div className="meetupGrid">
              {t("featuresItems", { returnObjects: true }).map((item) => (
                <div key={item.icon}>
                  <img src={item.icon} alt="icon" />
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
