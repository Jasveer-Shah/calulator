
import styled from "styled-components";

function Calculator() {
    return (
         <Wrapper> 
         
          <Settings><h2>calc</h2> </Settings>  
          <Input type="number" placeholder="0"/>
          <Buttons>
             <Button>7</Button>  
             <Button>8</Button>
             <Button>9</Button>
             <DeleteButton>Del</DeleteButton>
             <Button>4</Button>
             <Button>5</Button>
             <Button>6</Button>
             <Button>+</Button>
             <Button>1</Button>
             <Button>2</Button>
             <Button>3</Button>
             <Button>-</Button>
             <Button>.</Button>
             <Button>0</Button>
             <Button>/</Button>
             <Button>x</Button>

             <ResetButton><p>Reset</p></ResetButton>
             <EqualButton><p>=</p></EqualButton>
             

          </Buttons>
        </Wrapper>
    )
}

export default Calculator

const Wrapper = styled.div`
  
  height: 540px;
  width: 708px;
  display:flex;
  flex-direction: column;
  border-radius: 15px;
  
`
const Settings = styled.div`
    
     width: 540px;
     height: 44px;
     color: white;
     display:flex;
      
     h2 {
         font-family: Spartan;
         font-size: 32px;
         font-style: normal;
         font-weight: 36px;
         latter-spacing: -0.53;
         text-align: center;
     }
`

const Input = styled.input`
     height:128px;
     width: 100%;
     background-color:#181f33;
     border-radius: 8px;
     margin-bottom:15px;
     text-align: right;
     color:white;
     font-size: 50px;
     padding: 25px;
     border:none;

     ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }

     &:focus {background-color:#181f33;
         outline:none;
     }
`
const Buttons = styled.div`
    background-color: #242d44;
    border-radius: 10px;
    padding:25px;
    width: 100%;
    height:100%;
    display:grid;
    justify-items:center;
    grid-template-rows:1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    // grid-template-rows: repeat(5, 1fr);
    // grid-template-columns: repeat(4, 1fr);

    // grid-template: repeat(5, 1fr)/ repeate(4, 1fr);
    grid-gap: 10px;

    p {
        font-family: Sparton;
        font-size: 20px;
        font-style:normal;
        font-weight: 700;
        line-height: 22px;
        latter-spacing: -0.33333333432674408;
        text-align:center;
    }
`

const Button = styled.div`
     background-color: #eae3dc;
     font-size: 25px;
     border-radius: 6px;
     width: 100%;
     height: 64px;
     display: flex;
     justify-content: center;
     align-items:center;
     transition: 0.3s;

     &:hover {
         background-color: aquamarine;
     }
`

const DeleteButton = styled(Button)`
    background-color: #647198;
    color: white;
`
const ResetButton = styled(Button)`
    background-color: #647198;
    grid-column: span 2;
    width: 100%;
    color: white;
`

const EqualButton = styled(Button)`
background-color: #d03f2f;
    grid-column: span 2;
    width: 100%;
`