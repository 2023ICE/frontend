import styled from 'styled-components';

const SignUpPage = () => {
  return <Title>회원 정보를 입력해주세요</Title>;
};

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontsize.TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
export default SignUpPage;
