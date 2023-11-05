import React, { useState } from 'react';
import styled from 'styled-components';

function ResultForm() {
  const [allergenData, setAllergenData] = useState([
    {
      name: '볼로네제 파스타',
      imageUrl: '',
      ingredient: ['돼지고기', '밀'],
      cause: ['돼지고기', '밀가루'],
    }
  ]);

  const username = '한상우';

  return (
    <div>
      {allergenData.map((item, index) => (
        <div key={index}>
          <ResultContainer>
            <Title>[{item.name}]의</Title>
            <Description isAllergen={true}>
              [{item.ingredient.map(ingredient => `[${ingredient}]`).join(', ')}] 이(가)
            </Description>
            <Title>[{username}]님의</Title>
            <Description isAllergen={true}>
              [{item.cause.map(causeItem => `[${causeItem}]`).join(', ')}] 알러지를 유발합니다!!
            </Description>
            <ButtonGroup>
              <Button>대체 레시피</Button>
              <RightAlignedButton>비슷한 음식 추천</RightAlignedButton>
            </ButtonGroup>
          </ResultContainer>
        </div>
      ))}
    </div>
  );
}

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: ${(props) => (props.isAllergen ? 'red' : 'black')};
  text-align: center;
  margin-bottom: 15px;
  white-space: nowrap; /* 이 부분을 추가 */
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const Button = styled.button`
  padding: 6px 12px;
  background-color: #FF8A73;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const RightAlignedButton = styled(Button)`
  margin-left: 10px;
`;

export default ResultForm;
