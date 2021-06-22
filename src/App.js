import React from 'react';
import styled from "styled-components";
import './App.css';
import Calculator from "./components/Calculator";

function App() {
  return (
   <Wrapper>
     <Calculator/>
   </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
background-color: #3a4663;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

