import ResultForm from '../components/form/ResultForm';
import styled from 'styled-components';
import DefaultImage from '../assets/images/default_img.svg';

const ResultPage = () => {
  return (
    <>
      <Img src={DefaultImage} alt="Default Image" />
      <ResultForm />
    </>
  );
};

const Img = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 130px;
`;
export default ResultPage;
