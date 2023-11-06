import styled from 'styled-components';
import SearchBarSquare from '../components/ui/SearchBar_Square';

const MainPage = () => {
  return (
    <ContentWrapper>
      <Search_Input />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
`;
const Search_Input = styled(SearchBarSquare)`
  margin-top: auto;
  margin-bottom: auto;
`;

export default MainPage;
