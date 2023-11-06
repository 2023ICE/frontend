import styled from 'styled-components';
import SearchResultBox from '../components/ui/SearchResultBox';
import SearchBar_Line from '../components/ui/SearchBar_Line';
import PageLayout from '../components/layout/PageLayout';

const SearchPage = () => {
  return (
    <PageLayout>
      <ContentWrapper>
        <TiTle>Aller Check</TiTle>
        <SearchBar_Line />
        <ListWrapper>
          <SearchResultBox />
          <SearchResultBox />
          <SearchResultBox />
          <SearchResultBox />
        </ListWrapper>
      </ContentWrapper>
    </PageLayout>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
const TiTle = styled.p`
  font-size: ${({ theme }) => theme.fontsize.TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;
const ListWrapper = styled.div`
  padding: 10px 5px;
  width: 100%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: scroll;
`;

export default SearchPage;
