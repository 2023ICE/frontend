import ResultForm from '../components/form/ResultForm';
import styled from 'styled-components';

const ResultPage = () => {
  return (
    <>
      <ContentWrapper>
        <ResultForm />
      </ContentWrapper>
    </>
  );
};
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
`;

export default ResultPage;
