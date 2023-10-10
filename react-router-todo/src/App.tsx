import './App.css';
import styled from '@emotion/styled';
import { DataView } from 'pages/DataView';
import { ToDoListContextProvider } from 'context/ToDoList';
import { Routes, Route } from 'react-router-dom';
import { ToDoInput } from 'pages/ToDoInput';
import { Header } from 'components/Header';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const NotFound = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <Header></Header>
        <Routes>
          <Route path='/' element={<DataView></DataView>}></Route>
          <Route path='/add' element={<ToDoInput></ToDoInput>}></Route>
          <Route
            path='*'
            element={
              <NotFound>
                404
                <br></br>
                NOT FOUND
              </NotFound>
            }></Route>
        </Routes>
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;
