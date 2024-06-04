import styled from "styled-components";
import backgroundImage from "../assets/background.jpeg";
// import ContactBg from "../assets/contact_us_bg.png";

export const Body = styled.div`
  width: 100%;
`;

export const TopNav = styled.div`
  padding: 4px 11%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WattiLogo = styled.img`
  height: 46px;
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
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 60px;
  width: 255px;

  /* border-radius: 8px; */
  border: none;
  background-color: #00a0ad;
  color: white;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.2px;

  user-select: none;
  cursor: pointer;
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

export const SubTitle = styled.div`
  color: #4ab1bd;
  font-weight: 300;
  font-size: 25.5px;
  margin-bottom: -5px;
  letter-spacing: 0px;
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
  z-index: 2;
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
`;

export const Article1 = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
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

export const Article1Btn = styled.div`
  margin-top: 20px;
  height: 58px;
  width: 220px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #888;
  border: 1px solid #ccc;

  cursor: pointer;
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
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25); // 어두운 배경색
    z-index: 1; // PIXI 애플리케이션 위에 배치
  }
`;

export const Section2Title = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0px;
  z-index: 2;
`;

export const Section2Btn = styled.a`
  margin-top: 20px;
  height: 58px;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  z-index: 2;
  
  font-size: 16px;
  font-weight: 500;
  color: white;
  border: 1px solid white;
  
  cursor: pointer;
  text-decoration-line: none;
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
  z-index: 2;

  display: flex;
  justify-content: center;
  padding: 0 1%;
`;

export const HeaderBtmNavTitle = styled.div`
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
  padding-top: 5%;
  justify-content: start;
  align-items: center;
  gap: 46px;

  color: #777;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.3px;
  font-weight: 500;
`;

export const HeaderBtmNavColumnDivider = styled.div`
  margin: auto;
  width: 0.5px;
  height: 130px;
  background-color: #ccc;
`;