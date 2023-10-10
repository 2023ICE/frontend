import styled from 'styled-components';

const PageLayout = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

const PageContainer = styled.div`
  width: 393px;
  height: 852px;
  padding: 20px;
  border: 1px solid black;
`;
export default PageLayout;
