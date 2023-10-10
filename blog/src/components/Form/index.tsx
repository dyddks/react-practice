import styled from "@emotion/styled";
import { Button } from "components/Button";
import { error } from "console";
import { useState } from "react";
import { json } from "stream/consumers";

const Container = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 8px;
    z-index: 1;
`;

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 16px;
`;

const InputGroup = styled.div`
    margin-bottom: 16px;
`;

const Label = styled.div`
    font-size: 1.2rem;
`;

const Input = styled.input`
    font-size: 1.2rem;
`;

const Action = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

interface Props{
    readonly onClose?: () => void;
}

export const Form = ({onClose}: Props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const registerPost = () => {
        if(title === '' || body === '') return;

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                user: 1,
                title,
                body,  
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((Response) => Response.json())
        .then((json) => {
            console.log(json);
            if(typeof onClose === 'function') onClose();
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return(
        <Container>
            <Background></Background>
            <Contents>
                    <Title>블로그 글 등록</Title>
                    <InputGroup>
                        <Label>Title:</Label>
                        <Input value={title}  onChange={(event) => setTitle(event.target.value)}></Input>
                    </InputGroup>
                    <InputGroup>
                        <Label>Body:</Label>
                        <Input value={body}  onChange={(event) => setBody(event.target.value)}></Input>
                    </InputGroup>
                    <Action>
                            <Button label="등록하기" onClick={registerPost}></Button>
                            <Button label="닫기" color="#304ffe" onClick={onClose}></Button>
                    </Action>
                </Contents>
        </Container>
    );
};