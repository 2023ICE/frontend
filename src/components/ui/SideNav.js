import styled from 'styled-components';
import PERSON_ICON from '../../assets/icons/person.svg';
import { useNavigate } from 'react-router-dom';

const SideNav = ({ ...attrProps }) => {
  const navigate = useNavigate();
  return (
    <StyledSideNav {...attrProps}>
      <Button onClick={() => navigate('/allergies')}>
        <IconImg src={PERSON_ICON} alt="마이페이지 아이콘" />
      </Button>
    </StyledSideNav>
  );
};

const StyledSideNav = styled.nav`
  display: flex;
  justify-content: end;
`;
const Button = styled.button`
  width: 40px;
  height: 40px;
`;
const IconImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default SideNav;
