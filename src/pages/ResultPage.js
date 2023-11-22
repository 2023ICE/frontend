import ResultForm from '../components/form/ResultForm';
import styled from 'styled-components';
import DefaultImage from '../assets/images/default_img.svg';

const ResultPage = () => {
  return (
    <>
      <ImageWrapper>
        <img src={DefaultImage} alt="Default Image" />
      </ImageWrapper>
      <ResultForm />
    </>
  );
};

const ImageWrapper = styled.div`
  text-align: center;
  margin bottom : auto;
  img {
    max-width: 100%;
    height: auto;
    max-height: 150px;
  }
`;
export default ResultPage;
