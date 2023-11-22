import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AllergenIcons from '../ui/AllergyIcon';
import resultData from '../../assets/dummy_data/resultData.json';
import AddComma from '../../utils/AddComma';

const ResultForm = () => {
  const [allergenData, setAllergenData] = useState([]);
  const username = '한상우';

  useEffect(() => {
    setAllergenData(resultData.result);
  }, [resultData]);

  return (
    <Container>
      {allergenData.map((item) => (
        <ResultContainer key={item.name}>
          <Title>
            {username}님의
            <ItemName>{item.name}</ItemName>
            알러지 정보
          </Title>

          {item.cause.length > 0 && (
            <>
              <Description isAllergen={true}>
                <AddComma items={item.cause} color="#FF8A73" />
              </Description>
              <Description>알러지를 유발합니다!</Description>
            </>
          )}

          <IconBox>
            <Subtitle>알러지 유발 재료</Subtitle>
            <AllergenIcons allergens={item.ingredient} />
          </IconBox>

          <ButtonGroup>
            <Button>대체 레시피</Button>
            <RightAlignedButton>비슷한 음식 추천</RightAlignedButton>
          </ButtonGroup>
        </ResultContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultContainer = styled.div`
  margin: 10px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontsize.S_TITLE};
  text-align: center;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontsize.MEDIUM};
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  text-align: center;
  margin-bottom: 15px;
`;

const IconBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 5px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontsize.S_TITLE};
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.GRAY};
  color: #fff;
  font-size: ${({ theme }) => theme.fontsize.MEDIUM};
  border-radius: 7px;
  width: 150px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  }
`;

const RightAlignedButton = styled(Button)`
  margin-left: 10px;
`;

const ItemName = styled.div`
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  margin-top: 15px;
  margin-bottom: 15px;
`;

export default ResultForm;
