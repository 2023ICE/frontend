import AllergyForm from '../components/form/AllergyForm';
import styled from 'styled-components';
import DefaultImage from '../assets/images/default_img.svg';

const AllergyPage = () => {
  return (
    <>
      <ImageWrapper>
        <img src={DefaultImage} alt="Default Image" />
      </ImageWrapper>
      <Title>알러지가 있는 재료를 선택해주세요</Title>
      <AllergyForm />
    </>
  );
};

const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    height: auto;
    max-height: 200px;
  }
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