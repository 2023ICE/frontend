import styled from 'styled-components';
import SEARCH_ICON from '../../assets/icons/search_pink.svg';
import { useNavigate } from 'react-router-dom';

const SearchBarSquare = ({ ...attrProps }) => {
  const navigate = useNavigate();

  return (
    <StyledInput {...attrProps} onClick={() => navigate('/search')}>
      <Input>메뉴명을 입력하세요.</Input>
      <Button>
        <img src={SEARCH_ICON} alt="검색 아이콘" />
      </Button>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  border: 2px solid ${({ theme }) => theme.colors.MAIN_COLOR};
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;
const Input = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;
const Button = styled.button`
  padding-top: 3px;
`;

export default SearchBarSquare;
