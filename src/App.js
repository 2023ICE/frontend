import GlobalStyle from './styles/GlobalStyle';
import { Theme } from './styles/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainPage from './pages/MainPage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import AllergyPage from './pages/AllergyPage'
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/allergies" element={<AllergyPage />} />
            <Route path="/results" element={<ResultPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
