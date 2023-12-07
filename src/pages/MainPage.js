import styled from 'styled-components';
import SearchBarSquare from '../components/ui/SearchBar_Square';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [cookies] = useCookies(['accessToken', 'name']);

  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      if (cookies.accessToken) {
        console.log(cookies);
      } else {
        navigate('/login');
        console.log(cookies);
      }
    };
    checkToken();
  }, [cookies]);

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
