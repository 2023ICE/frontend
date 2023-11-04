import styled from 'styled-components';
import PERSON_ICON from '../../assets/icons/person.svg';

const SideNav = ({ ...attrProps }) => {
  return (
    <StyledSideNav {...attrProps}>
      <Button>
        <IconImg src={PERSON_ICON} alt='마이페이지 아이콘' />
      </Button>
    </StyledSideNav>
  );
};

const StyledSideNav = styled.nav`
  display: flex;
  justify-content: end;
`;
const Button = styled.button``;
const IconImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default SideNav;
