import styled from 'styled-components';
import AllergenIcons from '../ui/AllergyIcon';
import AddComma from '../../utils/AddComma';
import BACK_BTN_ICON from '../../assets/icons/back_icon.svg';

const ResultForm = ({ data, setCurrentFood }) => {
  const { name, imageUrl, ingredients, causes } = data;

  return (
    <Container>
      <GoLogInBtn onClick={() => setCurrentFood([])}>
        <img src={BACK_BTN_ICON} />
      </GoLogInBtn>

      <FoodName>{name}</FoodName>
      <ImgBox>
        <FoodImg src={imageUrl} />
      </ImgBox>

      <ResultContainer>
        <ResultBox>
          {ingredients.length > 0 ? (
            <>
              <div>
                <SubTitle>알러지 정보</SubTitle>
                <ShadowBox>
                  <Description>
                    <AddComma items={causes} color="#FF8A73" />
                  </Description>
                  <Description>알러지를 유발합니다!</Description>
                </ShadowBox>
              </div>

              <div>
                <SubTitle>알러지 유발 재료</SubTitle>
                <ShadowBox>
                  <IconBox>
                    {ingredients.length > 0 && (
                      <AllergenIcons allergens={ingredients} />
                    )}
                  </IconBox>
                </ShadowBox>
              </div>
            </>
          ) : (
            <Title>안전합니다!</Title>
          )}
        </ResultBox>
      </ResultContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
`;
const GoLogInBtn = styled.button`
  width: 30px;
  height: 30px;
  align-self: start;
`;
const FoodName = styled.p`
  font-size: ${({ theme }) => theme.fontsize.TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
const ImgBox = styled.div`
  width: 220px;
  height: 220px;
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
const ResultContainer = styled.div`
  margin: 10px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontsize.TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  text-align: center;
  margin-bottom: 25px;
`;
const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Description = styled.p`
  font-size: ${({ theme }) => theme.fontsize.MEDIUM};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
  text-align: center;
  margin-bottom: 15px;
`;
const IconBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
const ShadowBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
`;
const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontsize.S_TITLE};
  text-align: start;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;

export default ResultForm;
