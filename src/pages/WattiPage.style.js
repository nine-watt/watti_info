import styled, { keyframes } from "styled-components";
import backgroundImage from "../assets/background.jpeg";
// import ContactBg from "../assets/contact_us_bg.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeInMoveUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInMoveR = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInMoveL = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Body = styled.div`
  width: 100%;
`;

export const TopNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 76%;
  padding: 12px 12% 18px 12%;
  display: flex;
  justify-content: space-between;
  align-items: end;

  z-index: 10;
`;

export const WattiLogo = styled.img`
  height: 40px;
  user-select: none;
`;

export const NavRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 42px;
  font-size: 16.5px;
  font-weight: 300;
  padding-bottom: 10px;
  letter-spacing: 0px;

  user-select: none;
  cursor: pointer;
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 60px;
  width: 238px;
  padding-left: 35px;

  /* border-radius: 8px; */
  border: none;
  background-color: #00a0ad;
  color: white;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.2px;

  user-select: none;
  cursor: pointer;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  &:hover {
    gap: 18px;
  }

  opacity: 0;
  animation: ${fadeInMoveUp} 0.5s ease-out;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
`;

export const TitleHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #333;
  text-align: center;
  font-weight: 600;
  font-size: 53px;
  line-height: 72px;
  letter-spacing: 1px;
`;

export const TitleText = styled.div`
  opacity: 0;
  animation: ${fadeInMoveUp} 0.5s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
`;

export const SubTitle = styled.div`
  color: #4ab1bd;
  font-weight: 300;
  font-size: 25.5px;
  margin-bottom: -5px;
  letter-spacing: 0px;

  opacity: 0;
  animation: ${fadeInMoveUp} 0.5s ease-out;
  animation-fill-mode: forwards;
`;

export const TitleBg = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 950px;
  background-color: #e4e4e4;
  background-image: url(${backgroundImage});
  background-size: cover;
  filter: blur(3px);
  z-index: 1;
`;

export const TitleArea = styled.div`
  height: 905px;
  position: relative;
  padding: 20px;
  z-index: 1;
`;

export const CenterArea = styled.div`
  padding-top: 200px;
  display: flex;
  justify-content: center;
`;

export const Section1 = styled.div`
  position: relative;
  height: 1720px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f6f6f6;
  z-index: 3;
`;

export const Section1Title = styled.div`
  margin: 160px 0 -10px 0;
  font-size: 34px;
  color: #444;
  font-weight: 700;
  /* letter-spacing: -0.2px; */

  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 0.5s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
`;

export const Section1Row = styled.div`
  margin-top: 140px;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  /* gap: 40px; */
`;

export const Thumbnail = styled.img`
  height: 310px;
  width: 540px;
  background-color: black;

  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(50px)")};
  animation: ${({ isVisible, reverse = false }) => (isVisible ? (reverse ? fadeInMoveL : fadeInMoveR) : "none")} 0.5s ease-out;
`;

export const Article1 = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(50px)")};
  animation: ${({ isVisible }) => (isVisible ? fadeInMoveUp : "none")} 0.5s ease-out;
`;

export const Article1Title = styled.div`
  font-size: 26.5px;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #474748;
`;

export const Article1Content = styled.div`
  font-size: 19.5px;
  font-weight: 200;
  color: #444;
  letter-spacing: 0px;
`;

export const Article1Btn = styled.a`
  position: relative;
  margin-top: 20px;
  height: 58px;
  width: 210px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #888;
  border: 1px solid #ccc;

  cursor: pointer;

  background: linear-gradient(to right, #999 0%, #999 50%, transparent 50%, transparent 100%);
  background-size: 200% 100%;
  background-position: right;
  transition: background-position 400ms ease-out, color 400ms ease-out;
  text-decoration-line: none;

  &:hover {
    color: white;
    background-position: left;
  }
`;

export const Section2 = styled.div`
  position: relative;
  height: 400px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25); // 어두운 배경색
    z-index: 0; // PIXI 애플리케이션 위에 배치
  }
`;

export const Section2Title = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0px;
  z-index: 1;

  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeInMoveUp : "none")} 0.5s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
`;

export const Section2Btn = styled.a`
  margin-top: 20px;
  height: 58px;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  z-index: 1;

  font-size: 17px;
  font-weight: 500;
  color: white;
  border: 1px solid white;

  cursor: pointer;
  text-decoration-line: none;

  background-color: transparent;
  transition: background-color 300ms ease-out;

  &:hover {
    color: #00a0ad;
    background-color: white;

    & svg path {
      stroke: #00a0ad;
    }
  }

  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeInMoveUp : "none")} 0.5s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
`;

export const Footer = styled.div`
  height: 330px;
  padding: 0 12%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14.5px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #777;

  line-height: 24px;
`;

export const FooterColumn = styled.div``;

export const NinewattLogo = styled.img`
  height: 66px;
  margin-bottom: 40px;
`;

export const FooterTable = styled.div`
  font-size: 13px;
  height: 210px;
`;

export const FooterTableHeader = styled.div`
  display: flex;
  font-weight: 500;
  gap: 35px;
`;

export const FooterTableRow = styled.div`
  margin-top: 9px;
  margin-left: 74px;
  display: flex;
  text-align: center;
  color: #aaa;

  cursor: pointer;
`;

export const FooterNav = styled.div`
  height: 50px;
  padding: 0 12%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ddd;

  font-size: 13.5px;
  font-weight: 400;
  letter-spacing: -0.4px;
  color: #aaa;
`;

export const FooterNavBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const HeaderBtmNav = styled.div`
  position: relative;
  height: 450px;
  background-color: white;
`;

export const HeaderBtmNavArea = styled.div`
  position: absolute;
  margin-top: -195px;
  height: 280px;
  width: 74%;
  left: 12.3%;
  border-radius: 40px;
  box-shadow: 0 25px 50px -20px rgb(0 0 0 / 0.1);
  background-color: white;
  z-index: 1;

  display: flex;
  justify-content: center;
  padding: 0 1%;

  opacity: 0;
  animation: ${fadeInMoveUp} 0.5s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
`;

export const HeaderBtmNavTitleArea = styled.div`
  height: 100%;
  padding-top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #555;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 1px;
  text-align: center;

  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
`;

export const HeaderBtmNavTitle = styled.div`
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 0.5s ease-out;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
`;

export const HeaderBtmLogo = styled.img`
  margin-bottom: -4px;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 160px;
`;

export const HeaderBtmNavColumn = styled.div`
  width: 22%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  padding-top: 5.5%;
  justify-content: start;
  align-items: center;
  gap: 44px;

  color: #777;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.3px;
  font-weight: 500;

  cursor: pointer;
  transition: padding-top 300ms ease-out;

  &:hover {
    padding-top: 4%;
  }
`;

export const HeaderBtmNavColumnDivider = styled.div`
  margin: auto;
  width: 0.5px;
  height: 130px;
  background-color: #ccc;
`;

export const LanguagePopupWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 20;
`;

export const LanguagePopupBox = styled.div`
  position: fixed;
  top: 60px;
  right: calc(12% + 2px);

  height: 130px;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background-color: white;
  box-shadow: 0 20px 30px -20px rgb(0 0 0 / 0.5);
`;

export const LanguagePopupItem = styled.div`
  width: 100%;
  padding: 8.5px 0;

  color: #555;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;

  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #11111111;
  }
`;
