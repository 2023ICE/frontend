import styled from 'styled-components';
import allergenicIngredientsMap from '../../assets/dummy_data/allergenicIngredientsMap.json';
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
          <div key={index}>
            <AllergenIcon src={allergenIcon} alt={`${allergenName} `} />
            <AllergenText>{allergenName}</AllergenText>
          </div>
        );
      })}
    </AllergenIconContainer>
  );
};

const AllergenIconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const AllergenIcon = styled.img`
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
`;
const AllergenText = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontsize.MEDIUM_TXT};
`;

export default AllergenIcons;
