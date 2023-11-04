import styled from 'styled-components';
import PageLayout from '../components/layout/PageLayout';
import SideNav from '../components/ui/SideNav';
import SearchBarSquare from '../components/ui/SearchBar_Square';

const MainPage = () => {
  return (
    <PageLayout>
      <Wrapper>
        <SideNav />
        <Search_Input />
      </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Search_Input = styled(SearchBarSquare)`
  margin-top: auto;
  margin-bottom: auto;
`;

export default MainPage;
