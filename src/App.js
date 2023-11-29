import GlobalStyle from './styles/GlobalStyle';
import { Theme } from './styles/Theme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import RoutesContainer from './components/RoutesContainer';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <RoutesContainer />
        </BrowserRouter>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;
