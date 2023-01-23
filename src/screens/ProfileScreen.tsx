import Paragraph from "components/Paragraph";
import Section from "components/Section";
import React from "react";
import seyeonImage from "../assets/images/seyeon.jpg";

function ProfileScreen() {
  return (
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
          <br />
        </Paragraph>
        <Paragraph>
          <h3>👩‍🎓Education</h3>
          <p> 2016.08 단국대학교 사학과(학사) 졸업 </p>
          <p> 2019.06 핀란드 투르쿠대학교, 동아시아학 (석사) 졸업</p>
          <br />
        </Paragraph>
        <Paragraph>
          <h3>✍Courses</h3>
          <p>
            <strong>SSAC </strong> - 웹 기반 AI 융합 개발자 양성 과정 최우수
            졸업생
          </p>
        </Paragraph>
      </div>
      <img src={seyeonImage} alt="huh logo" className="about-me__img" />
    </Section>
  );
}

export default ProfileScreen;
