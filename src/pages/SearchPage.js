import SearchBar_Square from '../components/ui/SearchBar_Square';
import SideNav from '../components/ui/SideNav';
import styled from 'styled-components';

const SearchPage = () => {
  return (
    <ContentWrapper>
      <SideNav />
      <SearchBar_Square />
      <ListWrapper />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const ListWrapper = styled.div`
  width: 100%;
  height: 70%;
`;
export default SearchPage;
