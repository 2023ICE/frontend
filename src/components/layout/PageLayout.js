import styled from 'styled-components';

const PageLayout = ({ children, ...attrProps }) => {
  return <PageContainer {...attrProps}>{children}</PageContainer>;
};

const PageContainer = styled.div`
  width: 393px;
  height: 852px;
  padding: 20px;
  border: 1px solid black;
`;
export default PageLayout;
