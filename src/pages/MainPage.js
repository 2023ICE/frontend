import styled from 'styled-components';
import SideNav from '../components/ui/SideNav';
import SearchBarSquare from '../components/ui/SearchBar_Square';

const MainPage = () => {
  return (
    <ContentWrapper>
      <SideNav />
      <Search_Input />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Search_Input = styled(SearchBarSquare)`
  margin-top: auto;
  margin-bottom: auto;
`;

export default MainPage;
