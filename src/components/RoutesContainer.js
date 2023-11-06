import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LogInPage from '../pages/LogInPage';
import SignUpPage from '../pages/SignUpPage';
import SearchPage from '../pages/SearchPage';
import AllergyPage from '../pages/AllergyPage';
import PageLayout from './layout/PageLayout';
import SideNav from './ui/SideNav';

const RoutesContainer = () => {
  const location = useLocation();
  const [curLocation, setCurLocation] = useState('');
  const hideNavPaths = ['/login', '/join'];

  useEffect(() => {
    setCurLocation(location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      {!hideNavPaths.includes(curLocation) && <SideNav />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/join" element={<SignUpPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/allergies" element={<AllergyPage />} />
      </Routes>
    </PageLayout>
  );
};

export default RoutesContainer;
