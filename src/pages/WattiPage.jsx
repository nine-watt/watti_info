import {
  Body,
  Btn,
  CenterArea,
  NavRow,
  Section1,
  Article1,
  Section1Row,
  Section1Title,
  SubTitle,
  Thumbnail,
  TitleArea,
  TitleBg,
  TitleHeader,
  TopNav,
  WattiLogo,
  Article1Title,
  Article1Content,
  Article1Btn,
  Section2,
  Footer,
  Section2Title,
  Section2Btn,
  FooterNav,
  FooterNavBtns,
  FooterColumn,
  NinewattLogo,
  FooterTable,
  FooterTableHeader,
  FooterTableRow,
  HeaderBtmNav,
  HeaderBtmNavArea,
  HeaderBtmNavTitle,
  HeaderBtmLogo,
  HeaderBtmNavColumn,
  HeaderBtmNavColumnDivider,
  LanguagePopupWrapper,
  LanguagePopupBox,
  LanguagePopupItem,
  TitleText,
  HeaderBtmNavTitleArea,
} from "./WattiPage.style";
import Logo from "../assets/watti_logo.png";
import Exam1 from "../assets/watti_exam1.png";
import Exam2 from "../assets/watti_exam2.png";
import Exam3 from "../assets/watti_exam3.png";
import Logo2 from "../assets/ninewatt_logo.png";
import Logo3 from "../assets/watti_grey_logo.png";
import { useCallback, useEffect, useRef, useState } from "react";

const CheckSvg = () => {
  return (
    <svg width="40" height="30" viewBox="0 0 45 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.60156 20.0762H12.8613V26.7115H6.60156V20.0762Z" fill="#00A0AD" />
      <path d="M0.353516 13.3633H6.61323V19.9986H0.353516V13.3633Z" fill="#00A0AD" />
      <path d="M12.8916 26.7129H19.1513V33.3482H12.8916V26.7129Z" fill="#00A0AD" />
      <path d="M19.1523 20.0762H25.4121V26.7115H19.1523V20.0762Z" fill="#00A0AD" />
      <path d="M25.3828 13.4277H31.6425V20.063H25.3828V13.4277Z" fill="#00A0AD" />
      <path d="M31.6611 6.79102H37.9209V13.4263H31.6611V6.79102Z" fill="#00A0AD" />
      <path d="M37.8926 0.150391H44.1523V6.78569H37.8926V0.150391Z" fill="#00A0AD" />
    </svg>
  );
};

const WattiPage = () => {
  const [activeStep, setActiveStep] = useState("step1");
  const [isTop, setIsTop] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stepRefs = { step1: useRef(null), step2: useRef(null) };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const articles = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [lastArticle, setLastArticle] = useState(-1);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleScroll = useCallback(() => {
    const steps = ["step1", "step2"];
    const currentScroll = document.documentElement.scrollTop;
    setIsTop(currentScroll === 0);

    for (let i = steps.length - 1; i >= 0; i--) {
      const step = stepRefs[steps[i]].current;
      if (currentScroll >= step.offsetTop) {
        setActiveStep(steps[i]);
        break;
      }
    }

    for (let i = lastArticle + 1; i < articles.length; i++) {
      if (0 > articles[i].current.getBoundingClientRect().top - window.innerHeight) {
        console.log(i);
        setLastArticle(i);
        break;
      }
    }
  }, [lastArticle, articles, stepRefs]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (stepId) => {
    const currentStep = stepRefs[stepId].current;
    const firstStep = stepRefs["step1"].current;
    if (currentStep) {
      window.scrollTo({ top: currentStep.offsetTop - firstStep.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <Body>
      <LanguagePopupWrapper onClick={() => setIsOpenPopup(false)} style={isOpenPopup ? {} : { display: "none" }}>
        <LanguagePopupBox>
          <LanguagePopupItem>EN</LanguagePopupItem>
          <LanguagePopupItem>JP</LanguagePopupItem>
          <LanguagePopupItem>KR</LanguagePopupItem>
        </LanguagePopupBox>
      </LanguagePopupWrapper>
      <TopNav style={isTop ? { backgroundColor: "#e4e4e4" } : { backgroundColor: "white" }}>
        <WattiLogo src={Logo} alt="" />
        <NavRow>
          <div style={activeStep === "step1" ? { color: "#599eab", fontWeight: "800" } : {}} onClick={() => handleNavClick("step1")}>
            Home
          </div>
          <div style={activeStep === "step2" ? { color: "#599eab", fontWeight: "800" } : {}} onClick={() => handleNavClick("step2")}>
            Case studies
          </div>
          <div onClick={() => setIsOpenPopup(true)}>Language</div>
        </NavRow>
      </TopNav>
      <TitleBg />
      <TitleArea ref={stepRefs["step1"]}>
        <CenterArea>
          <TitleHeader>
            <SubTitle>WE ALWAYS LIVE THE CITY</SubTitle>
            <TitleText>
              3D Map-Based Urban Building <br /> Energy Analysis Platform
            </TitleText>
            <div style={{ height: "102px" }} />
            <Btn onClick={() => handleNavClick("step2")}>
              <div>Check the case studies</div>
              <div>→</div>
            </Btn>
          </TitleHeader>
        </CenterArea>
      </TitleArea>

      <HeaderBtmNav>
        <HeaderBtmNavArea>
          <HeaderBtmNavColumn>
            <CheckSvg />
            <div>Estimation of building CO2 emissions and potential energy savings using GIS, Big-data, and AI.</div>
          </HeaderBtmNavColumn>
          <HeaderBtmNavColumnDivider />
          <HeaderBtmNavColumn>
            <CheckSvg />
            <div>3D Visualization and Analysis of Urban and Building Energy Consumption.</div>
          </HeaderBtmNavColumn>
          <HeaderBtmNavColumnDivider />
          <HeaderBtmNavColumn>
            <CheckSvg />
            <div>Building Performance Diagnosis and Renovation Planning for Energy Efficiency Improvement.</div>
          </HeaderBtmNavColumn>
          <HeaderBtmNavColumnDivider />
          <HeaderBtmNavColumn>
            <CheckSvg />
            <div>Recommend appropriate types of renovations and their expected benefits, and connect them with local renovation contractors.</div>
          </HeaderBtmNavColumn>
        </HeaderBtmNavArea>
        <HeaderBtmNavTitleArea>
          <HeaderBtmNavTitle ref={articles[0]} isVisible={lastArticle >= 0}>
            Feasibility Evaluation and Implementation Support <br />
            for Sustainable Energy Solutions.
          </HeaderBtmNavTitle>
        </HeaderBtmNavTitleArea>
        <HeaderBtmLogo src={Logo3} alt="" />
      </HeaderBtmNav>

      <Section1 ref={stepRefs["step2"]}>
        <Section1Title ref={articles[1]} isVisible={lastArticle >= 1}>
          Watti's case studies
        </Section1Title>
        <Section1Row ref={articles[2]}>
          <Thumbnail src={Exam2} alt="" isVisible={lastArticle >= 2} />
          <Article1 isVisible={lastArticle >= 2}>
            <Article1Title>watti in Gangnam-gu</Article1Title>
            <Article1Content>
              The platform visualizes building energy use and CO2 emissions, offering emission rankings and comparisons across Seoul. It aids Gangnam District's
              carbon neutrality and green remodeling efforts, promoting community sustainability.
            </Article1Content>
            {/* <Article1Btn onClick={() => window.open("https://watti-gangnam.r-e.kr/map")}> */}
            <Article1Btn href="mailto:ninewatt@ninewatt.com" >
              <div>Related Inquiries</div>
              <div>→</div>
            </Article1Btn>
          </Article1>
        </Section1Row>
        <Section1Row ref={articles[3]}>
          <Article1 isVisible={lastArticle >= 3}>
            <Article1Title>watti in Paris</Article1Title>
            <Article1Content>
              Using data and simulations, we provide energy renovation scenarios and assess building energy efficiency to aid in decision-making for
              renovations. This approach facilitates partnerships with renovation experts, enabling effective renovations that reduce greenhouse gas emissions
              and lower energy costs.
            </Article1Content>
            {/* <Article1Btn onClick={() => window.open("https://greenplanner-paris.kro.kr/")}> */}
            <Article1Btn href="mailto:ninewatt@ninewatt.com" >
              <div>Related Inquiries</div>
              <div>→</div>
            </Article1Btn>
          </Article1>
          <Thumbnail src={Exam1} alt="" isVisible={lastArticle >= 3} reverse={true} />
        </Section1Row>
        <Section1Row ref={articles[4]}>
          <Thumbnail src={Exam3} alt="" isVisible={lastArticle >= 4} />
          <Article1 isVisible={lastArticle >= 4}>
            <Article1Title>watti in Seoul</Article1Title>
            <Article1Content>
              Wattie's Seoul prototype visualizes monthly electricity and gas consumption, identifies buildings with low energy efficiency for green remodeling
              prioritization, and presents comprehensive energy metrics on a 3D map, supported by advanced analysis tools.
            </Article1Content>
            {/* <Article1Btn onClick={() => window.open("https://wattissl3.kro.kr/map/130")}> */}
            <Article1Btn href="mailto:ninewatt@ninewatt.com" >
              <div>Related Inquiries</div>
              <div>→</div>
            </Article1Btn>
          </Article1>
        </Section1Row>
      </Section1>
      <Section2 ref={articles[5]}>
        <Section2Title isVisible={lastArticle >= 5}>CONTACT US</Section2Title>
        <Section2Btn href="mailto:ninewatt@ninewatt.com" isVisible={lastArticle >= 5}>
          <div>E-mail</div>
          <div style={{ marginTop: "4px" }}>
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 1.5L9.08579 8.58579C9.86683 9.36683 11.1332 9.36684 11.9142 8.58579L19 1.5M2.5 15H18.5C19.0523 15 19.5 14.5523 19.5 14V2C19.5 1.44772 19.0523 1 18.5 1H2.5C1.94772 1 1.5 1.44772 1.5 2V14C1.5 14.5523 1.94772 15 2.5 15Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Section2Btn>
      </Section2>
      <Footer>
        <FooterColumn>
          <NinewattLogo src={Logo2} alt="" />
          <div>
            204 Convensia-daero, Yeonsu-gu, Incheon | 21, Baekbeom-ro 31-gil, Mapo-gu, Seoul, Republic of Korea <br />
            EID : 107-88-42750 | NINEWATT Co., Ltd | CEO : YeongRok Kim <br />
            ninewatt@ninewatt.com | 070-1234-2345
          </div>
        </FooterColumn>
        <FooterColumn>
          <FooterTable>
            <FooterTableHeader>
              <div>HOME</div>
              <div>CASE STUDIES</div>
              <div>CONTACT</div>
            </FooterTableHeader>
            <FooterTableRow onClick={() => window.open("https://watti-gangnam.r-e.kr/map")}>
              <div>Gangnam-gu</div>
            </FooterTableRow>
            <FooterTableRow onClick={() => window.open("https://greenplanner-paris.kro.kr/")}>
              <div>Paris</div>
            </FooterTableRow>
            <FooterTableRow onClick={() => window.open("https://wattissl3.kro.kr/map/130")}>
              <div>Seoul</div>
            </FooterTableRow>
          </FooterTable>
        </FooterColumn>
      </Footer>
      <FooterNav>
        <FooterNavBtns>
          {/* <div>개인정보취급방침</div>
          <div>이용약관</div>
          <div>이메일무단수집거부</div> */}
        </FooterNavBtns>
        <FooterNavBtns>Copyright ⓒ NINEWATT All rights reserved.</FooterNavBtns>
      </FooterNav>
    </Body>
  );
};

export default WattiPage;
