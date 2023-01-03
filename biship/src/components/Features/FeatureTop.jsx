import React from "react";
import "./Features.scss";
import { useTranslation } from "react-i18next";
const FeatureTop = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={`featureTop ${i18n.language == "he" && "hebrew"}`}>
      <p>{t("feature_top_text")}</p>
    </div>
  );
};

export default FeatureTop;
