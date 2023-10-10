import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainPage from './pages/MainPage';
import LogInPage from './pages/LogInPage';
import GlobalStyle from './styles/GlobalStyle';
import { Theme } from './styles/Theme';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LogInPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
