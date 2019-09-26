import React, { Component } from 'react';
import styled from 'styled-components'


const LifePath = styled.div`
padding:35px 0 50px 0;

  
  
`;


const Circle = styled.div`
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;

  &:hover {
    background: palevioletred;
  }
  
`;

const LifeDescription = styled.div`
  color: black;
  text-align:left;
  display: inline-block;
  padding-left: 15px;
  width: 1000px;
  
  &::before {
    background: palevioletred;
  }
  
  
`;

class LifeEvent extends Component {
  render() {
    return (
        <LifePath>

        <Circle>
          <LifeDescription>
            {this.props.details.title}
        </LifeDescription>
        </Circle>

        </LifePath>
        

    );
  }
}

export default LifeEvent;
