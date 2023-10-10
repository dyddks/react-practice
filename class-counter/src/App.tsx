import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";
import { Component, ReactNode, useState } from "react";
import { Button } from "components/Button";
import { Label } from "components/Label";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  margin-bottom: 32px;
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = Record<string, never>;
interface State {
  readonly counter: number;
}

export class App extends Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state={
      counter: 0
    };
  }
  private sub = () => {
    const{counter} = this.state;
    this.setState({
      counter: counter-1
    });
  };
  private add = () => {
    const{counter} = this.state;
    this.setState({
      counter: counter+1
    });
  };
  render() {
      const{counter} = this.state;
      return (
        <Container>
          <Title>Counter App</Title>
          <Contents>
            <Button label="-" onClick={this.sub}></Button>
            <Label data={counter}></Label>
            <Button label="+" onClick={this.add}></Button>
          </Contents>
        </Container>
      );
  }
}

export default App;
