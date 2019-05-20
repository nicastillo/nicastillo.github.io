import React, { Component } from 'react';
import compassImg from './compass.svg';
import styled, { keyframes } from 'styled-components'
import './App.css';
import LifeEvent from './LifeEvent';
import lifeData from './lifedata.js'

const AppContainer = styled.div`
  background-color: rosybrown;
  display: grid;
  grid-template-columns: 40% auto;
  grid-auto-rows: auto;
  grid-template-areas:
                      'head head head head head'
                      'foo content content content content'
                      'foot foot foot foot foot';
  grid-gap: 10px;
`;

const AppHeader = styled.div`
  grid-area: head;
  background-color: #282c34;
  display:flex;
  flex-flow:column;
  height:125px;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const CompassLogo = styled.img`
  animation: App-logo-spin infinite 10s linear;
  height: 100px;
`;

const Picture = styled.div`
  grid-area: pic;
  width: 20vw;
  height: 20vh;
  min-width: 200px;

  position: fixed;
  background-color: #fff;
  margin: 50vh 10vw 30vh 10vw;

`;



const LifePath = styled.div`
  grid-area: main;
  width: 10px;
  height: 100%;
  background-color:MediumPurple;
  grid-column:2;
`;

const Footer = styled.div`
  height:50px;
  grid-area: foot;
  background-color: #282c34;
`;

const Content = styled.div`
  min-width:500px;
  grid-area: content;
  grid-template-areas:'pic main main main main';
  display:grid;
`;







class App extends Component {

  static propTypes = {

  };

  state = {
    events: {}
  };

  componentDidMount() {
    const events = lifeData;
    this.setState({
      events: events
    });
  }

  render() {
    return (
      <AppContainer>

        <AppHeader>
          <CompassLogo src={compassImg}></CompassLogo>
        </AppHeader>
        <Picture></Picture>
        <Content>


          <LifePath>
            {Object.keys(this.state.events).map(key => <LifeEvent key={key} details={this.state.events[key]} />)}
          </LifePath>
        </Content>
        <Footer></Footer>

      </AppContainer>

    );
  }
}

export default App;
