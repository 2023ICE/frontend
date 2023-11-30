import styled from 'styled-components';
import SearchResultBox from '../components/ui/SearchResultBox';
import SearchBar_Line from '../components/ui/SearchBar_Line';
import SEARCH_RESULT_DATA from '../assets/dummy_data/searchPageData.json';

const SearchPage = () => {
  return (
    <ContentWrapper>
      <TiTle>Aller Check</TiTle>
      <SearchBar_Line />
      <ListWrapper>
        {SEARCH_RESULT_DATA.result.map((data) => (
          <SearchResultBox key={data.name} data={data} />
        ))}
      </ListWrapper>
    </ContentWrapper>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: scroll;
`;

export default SearchPage;
