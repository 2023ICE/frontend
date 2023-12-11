import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import RoutesContainer from './components/RoutesContainer';

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
