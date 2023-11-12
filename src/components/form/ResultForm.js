import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function ResultForm() {
  const [allergenData, setAllergenData] = useState([]);
  const username = '한상우';

  useEffect(() => {
    const headers = {
      Authorization: 'Bearer YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json',
    };

    axios
      .get('http://localhost:3000/api/search', { headers, params: { q: '{}' } })
      .then((response) => {
        setAllergenData(response.data.result);
      })
      .catch((error) => {
        console.error('API 호출 오류:', error);
      });
  }, []);

  return (
    <div>
      {allergenData.map((item) => (
        <div key={item.name}>
          <ResultContainer>
            <Title>[{item.name}]의</Title>
            {item.ingredient.length > 0 && (
              <Description isAllergen={true}>
                [
                {item.ingredient
                  .map((ingredient) => `[${ingredient}]`)
                  .join(', ')}
                ] 이(가)
              </Description>
            )}
            <Title>[{username}]님의</Title>
            {item.cause.length > 0 && (
              <Description isAllergen={true}>
                [{item.cause.map((causeItem) => `[${causeItem}]`).join(', ')}]
                알러지를 유발합니다!!
              </Description>
            )}
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
  font-size: ${({ theme }) => theme.fontsize.TITLE};
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontsize.TITLE};
  color: ${(props) => (props.isAllergen ? 'red' : 'black')};
  text-align: center;
  margin-bottom: 15px;
  white-space: nowrap;
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
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
`;

const RightAlignedButton = styled(Button)`
  margin-left: 10px;
`;

export default ResultForm;
