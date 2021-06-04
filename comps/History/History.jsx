import React, {useState} from 'react'
import styled from "styled-components";
import HistoryData from './HistoryData'

const Content = styled.div `
  padding: 20px 30px;
  background-color: #fafafa;
  position: relative;
  border-radius: 6px;
  box-sizing: border-box;
`

const TimeLine = styled.div `
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
    &:after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #fffaf2;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    }
    @media screen and (max-width: 600px) { 
      &:after {left: 31px;}
    }
`

const Container = styled.div `
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: ${props => props.direction ? '50%' : '0'};
  box-sizing: border-box;
  &:after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: #FFF6E7;
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
  left: ${props => props.direction ? '-16px' : 'unset'}
}
  &:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: ${props => props.direction ? '30px' : 'unset'};
    right: ${props => props.direction ? 'unset' : '30px'};
    border: medium solid #FFF6E7;
    border-width: ${props => props.direction ? '10px 10px 10px 0' : '10px 0 10px 10px'};
    border-color: ${props => props.direction ? 'transparent #FFF6E7 transparent transparent' : 'transparent transparent transparent #FFF6E7'};
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: ${props => props.direction ? '0%' : 'unset'};
      &:before {
        left: 60px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
      }
      &:after {left: 15px; }
  }
`

export default function History() {
  return (
    <TimeLine >
      {HistoryData.map((data, i) =>
        <Container key={i} direction={(i % 2) ? true : false}>
          <Content>
            <h1>2017</h1>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </Content>
        </Container>
      )}
    </TimeLine>
  )
}
