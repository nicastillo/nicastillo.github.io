import React, { Component } from 'react';
import styled from 'styled-components'

const p = {
    

};

const img = {
    

};

const Picture = styled.div`
  grid-area: pic;
  width: 20vw;
  height: 20vh;
  min-width: 200px;
  position: relative;
  background-color: #fff;
  margin: 10vh 10vw 30vh 10vw;

`;

class LifeEventPicture extends Component {
  render() {
    return (
        <Picture>
            <p style={p}>This is some about my life</p>
            <img style={img} src="https://images-na.ssl-images-amazon.com/images/I/71SZXI8KEtL.jpg" alt="pusheen"></img>
        </Picture>
    );
  }
}

export default LifeEventPicture;
