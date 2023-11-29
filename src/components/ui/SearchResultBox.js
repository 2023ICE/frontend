import styled from 'styled-components';
import AddComma from '../../utils/AddComma';
import { useNavigate } from 'react-router-dom';

const SearchResultBox = ({ data }) => {
  const { name, imageUrl, ingredients, causes } = data;
  const navigate = useNavigate();

  return (
    <ResultBoxContainer onClick={() => navigate('/results')}>
      <ImgBox>
        <FoodImg src={imageUrl} />
      </ImgBox>
      <Content>
        <FoodName>{name}</FoodName>
        <ResultBox>
          <AddComma items={ingredients} color="#FF8A73" />
          {ingredients.length !== 0 && (
            <>
              이(가) <br />
            </>
          )}
          <AddComma items={causes} color="#FF8A73" />
          {causes.length !== 0 ? `알러지에 위험합니다!` : `안전합니다!`}
        </ResultBox>
      </Content>
    </ResultBoxContainer>
  );
};

const ResultBoxContainer = styled.div`
  width: 100%;
  padding: 15px 5px;
  min-height: 160px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
const ImgBox = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);
`;
const FoodImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const FoodName = styled.p`
  font-size: ${({ theme }) => theme.fontsize.S_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
const ResultBox = styled.div`
  line-height: 20px;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
`;

export default SearchResultBox;
