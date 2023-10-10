import './App.css';
import { Header } from 'components/Header';
import styled from '@emotion/styled';
import { BlogPost } from 'components/BlogPost';
import { useState, useEffect} from 'react';
import { Button } from 'components/Button';
import { Form } from 'components/Form';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  align-items: center;
  height: 100vh;
  overflow: scroll;
`;

const ButtonContainer = styled.div`
    position: absolute;
    right: 40px;
    bottom:40px;
`;

interface Post{
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}

function App() {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((Response) => Response.json())
    .then((json) => setPosts(json))
    .catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <Container>
      <Header></Header>
      {posts.map((post) => (<BlogPost key={post.id} title={post.title} body={post.body}></BlogPost>))}
      <ButtonContainer>
        <Button label='등록' onClick={() => setShowForm(true)}></Button>
      </ButtonContainer>
      {showForm && <Form onClose={() => setShowForm(false)}></Form>}
    </Container>
  );
}

export default App;
