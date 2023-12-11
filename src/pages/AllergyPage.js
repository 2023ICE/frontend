import AllergyForm from '../components/form/AllergyForm';
import styled from 'styled-components';
import DefaultImage from '../assets/images/default_img.svg';

const AllergyPage = () => {
  return (
    <>
      <Img src={DefaultImage} alt="Default Image" />
      <Title>알러지가 있는 재료를 선택해주세요</Title>
      <AllergyForm />
    </>
  );
};

const Img = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 130px;
`;
const Title = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontsize.S_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  margin-top: 20px;
`;

export default AllergyPage;
