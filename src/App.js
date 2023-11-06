import GlobalStyle from './styles/GlobalStyle';
import { Theme } from './styles/Theme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import RoutesContainer from './components/RoutesContainer';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
