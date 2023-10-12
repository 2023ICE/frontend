import AllergyForm from '../components/form/AllergyForm';
import PageLayout from '../components/layout/PageLayout';
import styled from 'styled-components';


const AllergyPage = () =>{
    return(
        <PageLayout>
            <Title>알러지가 있는 재료를 선택해주세요</Title>
            <AllergyForm />
        </PageLayout>
        
    );
};

const Title = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontsize.S_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  margin-top: 120px;
`;

export default AllergyPage;