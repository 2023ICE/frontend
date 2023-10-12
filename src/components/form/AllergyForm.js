import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const AllergyForm = () => {
  const allergyData = ['난류', '돼지고기', '소고기', '계란', '복숭아', '땅콩', '잣', '오징어', '새우', '밀', '고등어', '조개류', '토마토'];
  const [selectedAllergy, setSelectedAllergy] = useState([]);

  const handleSelect = (item) => {
    if (selectedAllergy.includes(item)) {
      setSelectedAllergy(selectedAllergy.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedAllergy([...selectedAllergy, item]);
    }
  };

  const handleSubmit = async () => {
    const apiUrl = "/api/allergies";
    const accessToken = "YOUR_ACCESS_TOKEN";

    try {
      const response = await axios.post(apiUrl, {
        allergyInfo: selectedAllergy,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        const result = response.data;
        console.log("message:", result);
      } else {
        console.error("???");
      }
    } catch (error) {
      console.error("???:", error);
    }
  };

  console.log(selectedAllergy);

  return (
    <Wrapper className="wrap">
      <AllergyList className="allergy-list">  
        {allergyData.map((item, idx) => (
          <AllergyItem
            className={`allergy-item ${selectedAllergy.includes(item) ? "active" : ""}`}
            key={idx}
            onClick={() => handleSelect(item)}
          >
            {item}
          </AllergyItem>
        ))}
      </AllergyList>
      <div>
        <ButtonFrame onClick={handleSubmit} className="btn-frame">
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
  align-items: center;
  flex-wrap: wrap;
  margin: 5px;
`;

const AllergyItem = styled.li`
  margin: 8px;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 12px 15px;
  font-size: ${({ theme }) => theme.fontsize.MEDIUM_TXT};
  cursor: pointer;
  width: 95px;
  text-align: center;
  transition: all 0.2s;

  &.active {
    background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
    border: 1px solid palevioletred;
    color: #fff;
  }
`;

const ButtonFrame = styled.button`
  width: 327px;
  height: 48px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  color: white;
  margin-top: 20px;
  text-align: center;
`;

export default AllergyForm;
