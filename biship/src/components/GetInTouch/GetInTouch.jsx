import { Container } from "@mui/material";
import React from "react";

import "./GetInTouch.scss";
import formIlustration from "../../assets/images/formIlustration.png";
import hebrewFormIlustration from "../../assets/images/hebrew_get_in_touch.png";
import { useTranslation } from "react-i18next";

const GetInTouch = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="sectionGetInTouch" name="get-in-touch">
      <Container>
        <div className={`getInTouchGrid ${i18n.language == "he" && "hebrew"}`}>
          <div className="gridContent">
            <h6>{t("get_in_touch_top")}</h6>
            <h2>{t("get_in_touch_title")}</h2>
            <img
              src={
                i18n.language == "he" ? hebrewFormIlustration : formIlustration
              }
              alt="formIlustration"
            />
          </div>
          <div className="gridContent">
            <label htmlFor="name">{t("get_in_touch_lable1")}</label>
            <br />
            <input type="text" id="name" />
            <br />
            <label htmlFor="phone">{t("get_in_touch_lable2")}</label>
            <br />
            <input type="number" id="phone" />
            <br />
            <button onClick={() => {}}>{t("get_in_touch_button")}</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetInTouch;
