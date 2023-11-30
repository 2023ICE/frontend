import styled from 'styled-components';

const PageLayout = ({ children, ...attrProps }) => {
  return <PageContainer {...attrProps}>{children}</PageContainer>;
};

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px 20px 20px 20px;
`;
export default PageLayout;
