import GlobalStyle from './styles/GlobalStyle';
import { Theme } from './styles/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainPage from './pages/MainPage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import AllergyPage from './pages/AllergyPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/allergies" element={<AllergyPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
