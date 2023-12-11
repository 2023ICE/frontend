import styled from 'styled-components';
import SearchResultBox from '../components/ui/SearchResultBox';
import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar_Line from '../components/ui/SearchBar_Line';
import ResultForm from '../components/form/ResultForm';
import LOADING_IMG from '../assets/images/loading.gif';

const SearchPage = () => {
  const [resultData, setResultData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLastPage, setIsLastPage] = useState(false);
  const [page, setPage] = useState(1);
  const [prevValue, setPrevValue] = useState('');
  const [currentFood, setCurrentFood] = useState([]);

  const navigate = useNavigate();

  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading || isLastPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          // 추가 데이터 로드하는 로직
          !isLastPage && setPage((prev) => prev + 1);
          setIsLoading(true);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, isLastPage]
  );

  return (
    <ContentWrapper>
      <TiTle onClick={() => navigate('/')}>Aller Check</TiTle>

      {currentFood.length !== 0 ? (
        <ResultForm data={currentFood} setCurrentFood={setCurrentFood} />
      ) : (
        <>
          <SearchBar_Line
            setData={setResultData}
            page={page}
            setPage={setPage}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setErrorMsg={setErrorMsg}
            setIsLastPage={setIsLastPage}
            prevValue={prevValue}
            setPrevValue={setPrevValue}
          />
          <ListWrapper>
            {errorMsg && <p>{errorMsg}</p>}
            {resultData && resultData.length > 0 && (
              <>
                {resultData?.map((data, index) => {
                  if (resultData.length === index + 1) {
                    return (
                      <SearchResultBox
                        ref={lastElementRef}
                        key={data.name}
                        data={data}
                        setCurrentFood={setCurrentFood}
                      />
                    );
                  } else {
                    return (
                      <SearchResultBox
                        key={data.name}
                        data={data}
                        setCurrentFood={setCurrentFood}
                      />
                    );
                  }
                })}
              </>
            )}
          </ListWrapper>
          {isLoading && <Img src={LOADING_IMG} />}
        </>
      )}
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
const TiTle = styled.button`
  align-self: start;
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
const Img = styled.img`
  display: block;
  margin: 0 auto;
`

export default SearchPage;
