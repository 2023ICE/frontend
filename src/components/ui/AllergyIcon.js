import React from 'react';
import allergenicIngredientsMap from '../../assets/dummy_data/allergenicIngredientsMap.json';
import styled from 'styled-components';
import nutIcon from '../../assets/icons/nuts.svg';
import eggIcon from '../../assets/icons/egg.svg';
import crustacensICon from '../../assets/icons/crustacens.svg';
import fishIcon from '../../assets/icons/Fish_Food.svg';
import fruitIcon from '../../assets/icons/fruit.svg';
import meetIcon from '../../assets/icons/meet.svg';
import milkIcon from '../../assets/icons/milk.svg';
import wheatIcon from '../../assets/icons/wheat.svg';

const allergenIconsMap = {
  NUTS: nutIcon,
  EGG: eggIcon,
  CRUSTACEAN: crustacensICon,
  FISH: fishIcon,
  FRUIT: fruitIcon,
  MEAT: meetIcon,
  MILK: milkIcon,
  WHEAT: wheatIcon,
};

const AllergenIcons = ({ allergens }) => {
  if (!allergens || allergens.length === 0) {
    return null;
  }

  return (
    <AllergenIconContainer>
      {allergens.map((allergenName, index) => {
        const allergenIngredient = allergenicIngredientsMap[allergenName];

        if (!allergenIngredient) {
          return null;
        }

        const allergenIcon = allergenIconsMap[allergenIngredient];

        return (
          <AllergenContainer key={index}>
            <AllergenItem>
              <AllergenIcon src={allergenIcon} alt={`${allergenName} `} />
              <AllergenText>{allergenName}</AllergenText>
            </AllergenItem>
          </AllergenContainer>
        );
      })}
    </AllergenIconContainer>
  );
};

const AllergenIconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AllergenItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 5px 5px 5px;
`;

const AllergenIcon = styled.img`
  width: 23px;
  height: 23px;
  margin-bottom: 5px;
`;

const AllergenText = styled.div`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
`;

const AllergenContainer = styled.div`
  padding: 15px;
  text-align: center;
`;

export default AllergenIcons;
