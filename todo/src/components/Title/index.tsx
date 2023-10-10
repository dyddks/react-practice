import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 16px;
`;

const Label = styled.h1`
  margin: 0;
`;

interface Props{
    readonly label: string;
}
export const Title = ({label}: Props) => {
    return(
        <Container>
            <Label>{label}</Label>
        </Container>
    );
};