import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { putAllergy } from '../../api/putAllergy';
import { useCookies } from 'react-cookie';

const AllergyForm = () => {
  const [cookies, setCookie] = useCookies(['accessToken', 'allergies']);
  const allergyData = [
    '갑각류',
    '난류',
    '생선',
    '유제품',
    '견과류',
    '밀',
    '육류',
    '과일류',
  ];

  const [selectedAllergy, setSelectedAllergy] = useState(cookies.allergy || []);

  useEffect(() => {
    setCookie('allergy', selectedAllergy);
  }, [selectedAllergy, setCookie]);

  const handleSelect = (item) => {
    if (selectedAllergy.includes(item)) {
      setSelectedAllergy(
        selectedAllergy.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedAllergy([...selectedAllergy, item]);
    }
  };

  const handleSubmit = async () => {
    try {
      console.log('Selected Allergy Before Axios:', selectedAllergy);

      const response = await putAllergy(selectedAllergy, cookies.accessToken);

      console.log('API Response:', response);

      if (response.status === 200) {
        const result = response.data;
        console.log('Message:', result);
      } else {
        console.error('Unexpected Status Code:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Wrapper className="wrap">
      <AllergyList className="allergy-list">
        {allergyData.map((item, idx) => (
          <AllergyItem
            className={`allergy-item ${
              selectedAllergy.includes(item) ? 'active' : ''
            }`}
            key={idx}
            onClick={() => handleSelect(item)}
          >
            {item}
          </AllergyItem>
        ))}
      </AllergyList>
      <div>
        <ButtonFrame
          onClick={handleSubmit}
          className="btn-frame"
          disabled={selectedAllergy.length === 0}
        >
          선택하기
        </ButtonFrame>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 0;
`;
const AllergyList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;
const AllergyItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 12px 15px;
  font-size: ${({ theme }) => theme.fontsize.MEDIUM_TXT};
  cursor: pointer;
  width: 95px;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
    border: 1px solid palevioletred;
    color: #fff;
  }
`;
const ButtonFrame = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  &:disabled {
    background-color: gray;
  }
  color: white;
  margin-top: 20px;
  text-align: center;
`;

export default AllergyForm;
