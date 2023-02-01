/* eslint-disable jsx-a11y/media-has-caption */
import Section from "components/Section";
import React from "react";
import "../portfolio.css";
import { languageIcons } from "constants/icons";
import StackIcon from "components/StackIcon";
import Paragraph from "components/Paragraph";
import Footer from "components/Footer";
import { useTranslation } from "react-i18next";
import huhImage from "../assets/images/huh.png";
import seyeonImage from "../assets/images/seyeon.jpg";
import dchart from "../assets/images/dchart.png";

function HomeScreen() {
  const { t } = useTranslation();
  return (
    <div className="body">
      <Section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          {t("intro")}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <strong> {t("name")}</strong>
            {t("intro-2")}
          </div>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Full-Stack Devloper
        </p>
        <img src={huhImage} alt="huh logo" className="intro__img" />
      </Section>
      <Section className="my-stacks" id="stack">
        <h2 className="section__title section__title--stacks">My Stacks</h2>
        <div className="stacks">
          {languageIcons.map((icon, index) => (
            <StackIcon
              key={`${icon.name}_{index}`}
              iconName={icon.iconName}
              name={icon.name}
            />
          ))}
        </div>
        <a href="#work" className="btn">
          {t("mv2prj")}
        </a>
      </Section>
      <Section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Full-stack developer
        </p>

        <div className="about-me__body">
          <Paragraph>
            <h3>👩‍💻 Experience</h3>
            <p>
              2021.04 ~ <strong>Software Engineer </strong>@ Dencomm
            </p>
            <div style={{ fontSize: "0.9rem" }}>
              <p>• {t("work-1")}</p>
              <p>• {t("work-2")}</p>
              <p>• {t("work-3")}</p>
            </div>
            <br />
          </Paragraph>
          <Paragraph>
            <h3>👩‍🎓Education</h3>
            <p> 2011.03 ~ 2016.08 {t("education-1")} </p>
            <p>2016.09 ~ 2019.06 {t("education-2")} </p>
            <br />
          </Paragraph>
          <Paragraph>
            <h3>✍Courses</h3>
            <p>
              {t("course")} @{" "}
              <strong>
                <a href="https://sesac.seoul.kr/common/greeting.do">SeSAC</a>
              </strong>
            </p>
          </Paragraph>
        </div>
        <img src={seyeonImage} alt="huh logo" className="about-me__img" />
      </Section>
      <Section className="my-work" id="work">
        <h2 className="section__title section__title--mywork">My Work</h2>
        <p className="section__subtitle section__subtitle--mywork">
          A selection of my projects
        </p>
        <div className="portfolio">
          <a
            href="https://www.youtube.com/watch?v=701RvS43OyQ"
            className="portfolio__item"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dchart} alt="dchart" className="portfolio__video" />
          </a>
          <div className="portfolio__item">
            <video controls className="portfolio__video">
              <source
                // eslint-disable-next-line global-require
                src={require("../assets/videos/myvoice.webm")}
                type="video/webm"
              />
            </video>
          </div>
        </div>
        {/* <div className="portfolio">
          <
        </div> */}
        {/* <div className="portfolio">
          <a href="portfolio_item.html" className="portfolio__item">
            <img src="portfolio-01.jpg" alt="" className="portfolio__img" />
          </a>
          <a href="#" className="portfolio__item">
            <img src="portfolio-02.jpg" alt="" className="portfolio__img" />
          </a>
        </div> */}
      </Section>
      <Footer />
    </div>
  );
}

export default HomeScreen;
