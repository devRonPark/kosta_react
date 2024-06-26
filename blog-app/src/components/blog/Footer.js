import styled from "styled-components";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = ({ copyright }) => {
    return (
        <Wrap>
            <ContentWrap>
                <MenuItemsWrap>
                    <p>© 2024 Byung Chan</p>
                    <MenuItem>Terms Of Use</MenuItem>
                    <MenuItem>Privacy-Policy</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                </MenuItemsWrap>
                <InfoTextWrap>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </InfoTextWrap>
                <SocialIconsWrap>
                    <Icon>
                        <FaFacebookF />
                    </Icon>
                    <Icon>
                        <FaInstagram />
                    </Icon>
                </SocialIconsWrap>
            </ContentWrap>
        </Wrap>
    );
}

export default Footer;

const Wrap = styled.footer`
  background-color: #020c1b;
  margin-top: auto;
  padding: 50px 0;
  color: white;
  position: relative;
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MenuItemsWrap = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;

  p {
    text-align: center;
    font-size: 14px;
    padding-bottom: 4px;
  }
`;

const MenuItem = styled.li`
  transition: all ease 0.3s;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: #da2f68;
  }
`;

const InfoTextWrap = styled.div`
  font-size: 12px;
  line-height: 20px;
  opacity: 0.5;
  text-align: center;
  max-width: 800px;
  margin-bottom: 20px;
`;

const SocialIconsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

const Icon = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #04152d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    box-shadow: 0 0 0.625em #da2f68;
    color: #da2f68;
  }
`;