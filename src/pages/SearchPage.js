import styled from 'styled-components';
import SearchBar_Square from '../components/ui/SearchBar_Square';

const SearchPage = () => {
  return (
    <ContentWrapper>
      <TiTle>Aller Check</TiTle>
      <SearchBar_Square />
      <ListWrapper>
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
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
  font-size: 28px;
  font-weight: 400;
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
const ResultBox = styled.div`
  width: 100%;
  min-height: 160px;
  border-radius: 8px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
`;
export default SearchPage;
