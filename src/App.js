import { Container,Content,Row } from './styles'
import Input from './components/Input'
import Button from './components/Button'

import { useState } from 'react';

function App() {

  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState();

  const handleClear = () => {
    setCurrentNumber(0);
    setFirstNumber(0);
  }

  const handleSumNumber = () =>{
    if(firstNumber === 0){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(0);
      setOperation('+');
    }
    else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber(0);
      setOperation('');
    }
  }

  const handleSubtNumber = () =>{
    if(firstNumber === 0){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(0);
      setOperation('-');
    }
    else{
      const subt = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subt));
      setFirstNumber(0);
      setOperation('');
    }
  }

  const handleMultNumber = () =>{
    if(firstNumber === 0){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(0);
      setOperation('*');
    }
    else{
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber(0);
      setOperation('');
    }
  }

  const handleDivNumber = () =>{
    if(firstNumber === 0){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(0);
      setOperation('/');
    }
    else{
      const divi = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divi));
      setFirstNumber(0);
      setOperation('');
    }
  }

  const handleExpoNumber = () =>{
    if(firstNumber === 0){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(0);
      setOperation('^');
    }
    else{
      const expo = Number(firstNumber) ** Number(currentNumber);
      setCurrentNumber(String(expo));
      setFirstNumber(0);
      setOperation('');
    }
  }

  const handlePerceNumber = () =>{
    if(firstNumber !== 0){
      const perc = Number(firstNumber) * (Number(currentNumber)/100);
      setCurrentNumber(String(perc));
    }
    else{
      setCurrentNumber('0');
    }
  }

  const handleEquals = () =>{
    if( firstNumber !== 0 && operation !== '' && currentNumber !== 0 ){
      switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleSubtNumber();
          break;
        case '*':
          handleMultNumber();
          break;
        case '/':
          handleDivNumber();
          break;
        case '^':
          handleExpoNumber();
          break;
        case '%':
          handlePerceNumber();
          break;
        default:
          break;
      }
    }
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === 0 ? '' : prev}${number}`)
  }

  const handleChangeSignal = () => {
    setCurrentNumber(String(Number(currentNumber) * (-1)));
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label='C' onclick={()=> handleClear()} style={{backgroundColor: '#0088FF'}}/>
          <Button label='%' onclick={handlePerceNumber} style={{backgroundColor: '#0088FF'}}/>
          <Button label='^' onclick={handleExpoNumber} style={{backgroundColor: '#0088FF'}}/>
          <Button label='/' onclick={handleDivNumber} style={{backgroundColor: '#0088FF'}}/>
        </Row>
        <Row>
          <Button label='7' onclick={()=> handleAddNumber('7')}/>
          <Button label='8' onclick={()=> handleAddNumber('8')}/>
          <Button label='9' onclick={()=> handleAddNumber('9')}/>
          <Button label='*' onclick={handleMultNumber} style={{backgroundColor: '#0088FF'}}/>
        </Row>
        <Row>
          <Button label='4' onclick={()=> handleAddNumber('4')}/>
          <Button label='5' onclick={()=> handleAddNumber('5')}/>
          <Button label='6' onclick={()=> handleAddNumber('6')}/>
          <Button label='-' onclick={handleSubtNumber} style={{backgroundColor: '#0088FF'}}/>
        </Row>
        <Row>
          <Button label='1' onclick={()=> handleAddNumber('1')}/>
          <Button label='2' onclick={()=> handleAddNumber('2')}/>
          <Button label='3' onclick={()=> handleAddNumber('3')}/>
          <Button label='+' onclick={handleSumNumber} style={{backgroundColor: '#0088FF'}} />
        </Row>
        <Row>
          <Button label='+/-' onclick={handleChangeSignal}/>
          <Button label='0' onclick={()=> handleAddNumber('0')}/>
          <Button label='.' onclick={()=> handleAddNumber('.')}/>
          <Button label='=' onclick={handleEquals} style={{backgroundColor: '#0000FF'}}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
