import { Title } from "components/Title";
import { ToDoList } from "components/ToDoList";
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
`;

export const DataView = () => {
    return(
        <Container>
            <Title label='할 일 목록'></Title>
            <ToDoList></ToDoList>
        </Container>
    );
};

